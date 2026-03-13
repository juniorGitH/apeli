/**
 * Chatbot component - Interface style ChatGPT pour la cuisine connectée
 * Connecté au foyer amélioré Apeli via MCP Server
 */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { sendChatMessageStream, getMcpStatus } from "../utils/api";

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([
    { id: 1, title: "Nouvelle conversation", date: new Date().toISOString() },
  ]);
  const [activeConversation, setActiveConversation] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Données IoT du foyer Apeli (depuis le serveur MCP)
  const [iotData, setIotData] = useState({
    temperature: 0,
    ventilateur: "...",
    statut: "connexion...",
    fanSpeed: 0,
    weight: 0,
    alerts: [],
  });

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Vérifier l'authentification
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (!savedUser) {
      navigate("/");
      return;
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Polling des données IoT depuis le serveur MCP
  useEffect(() => {
    const fetchMcpStatus = async () => {
      try {
        const data = await getMcpStatus();
        if (data) {
          setIotData({
            temperature: data.temperature,
            ventilateur: `${data.fanMode} ${data.fanSpeed}%`,
            statut: data.status,
            fanSpeed: data.fanSpeed,
            weight: data.weight,
            alerts: data.alerts || [],
          });
        }
      } catch {
        setIotData((prev) => ({ ...prev, statut: "déconnecté" }));
      }
    };
    fetchMcpStatus();
    const interval = setInterval(fetchMcpStatus, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll vers le dernier message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Message de bienvenue
  useEffect(() => {
    setMessages([
      {
        id: 1,
        role: "assistant",
        content:
          "Bonjour ! Je suis **ApeliChef**, votre assistant cuisine intelligent connecté au foyer amélioré Apeli.\n\nJe peux vous aider à :\n- **Cuire des plats** en contrôlant la température du foyer\n- **Surveiller** la température en temps réel\n- **Ajuster le ventilateur** d'aération via le serveur MCP\n- **Vous guider** étape par étape dans vos recettes\n\nQue souhaitez-vous cuisiner aujourd'hui ?",
        timestamp: new Date().toISOString(),
      },
    ]);
  }, []);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userMsg = {
      id: Date.now(),
      role: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };

    const currentMessages = [...messages, userMsg];
    setMessages(currentMessages);
    setInput("");
    setIsLoading(true);

    // Préparer l'historique pour l'API (sans le message de bienvenue initial côté client)
    const apiMessages = currentMessages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: m.content }));

    const assistantMsgId = Date.now() + 1;
    let fullContent = "";

    // Ajouter un message assistant vide pour le streaming
    setMessages((prev) => [
      ...prev,
      {
        id: assistantMsgId,
        role: "assistant",
        content: "",
        timestamp: new Date().toISOString(),
      },
    ]);

    sendChatMessageStream(
      apiMessages,
      // onChunk — chaque token reçu
      (chunk) => {
        fullContent += chunk;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsgId ? { ...m, content: fullContent } : m
          )
        );
      },
      // onDone
      () => {
        setIsLoading(false);
      },
      // onError
      (errorMsg) => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsgId
              ? { ...m, content: `⚠️ Erreur : ${errorMsg}\n\nVérifiez que le backend est bien lancé et que vous êtes connecté.` }
              : m
          )
        );
        setIsLoading(false);
      }
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewConversation = () => {
    const newConv = {
      id: Date.now(),
      title: "Nouvelle conversation",
      date: new Date().toISOString(),
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveConversation(newConv.id);
    setMessages([
      {
        id: 1,
        role: "assistant",
        content:
          "Nouvelle conversation ! Que souhaitez-vous cuisiner sur le foyer Apeli ?",
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  // Rendu simple du markdown
  const renderMarkdown = (text) => {
    return text
      .replace(/## (.*)/g, '<h3 style="margin: 0.8rem 0 0.5rem; color: #2c3e50;">$1</h3>')
      .replace(/### (.*)/g, '<h4 style="margin: 0.6rem 0 0.3rem; color: #34495e;">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n- /g, "<br/>• ")
      .replace(/\n(\d+)\. /g, "<br/>$1. ")
      .replace(/\n> (.*)/g, '<blockquote style="border-left: 3px solid #e67e22; padding: 0.5rem 1rem; margin: 0.5rem 0; background: rgba(230,126,34,0.08); border-radius: 0 6px 6px 0;">$1</blockquote>')
      .replace(/\| (.*?) \|/g, (match) => `<code style="background: rgba(0,0,0,0.05); padding: 0.1rem 0.3rem; border-radius: 3px;">${match}</code>`)
      .replace(/\n\n/g, "<br/><br/>")
      .replace(/\n/g, "<br/>");
  };

  const sidebarWidth = isMobile ? "100%" : "260px";

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 70px)",
        marginTop: "70px",
        background: "#f7f7f8",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      {(sidebarOpen || !isMobile) && (
        <div
          style={{
            width: sidebarWidth,
            minWidth: isMobile ? "100%" : "260px",
            background: "#1a1a2e",
            color: "white",
            display: "flex",
            flexDirection: "column",
            position: isMobile ? "fixed" : "relative",
            top: isMobile ? "70px" : "auto",
            left: 0,
            bottom: 0,
            zIndex: isMobile ? 100 : 1,
          }}
        >
          {/* Nouveau chat button */}
          <button
            onClick={handleNewConversation}
            style={{
              margin: "1rem",
              padding: "0.75rem 1rem",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.background = "rgba(255,255,255,0.1)")}
            onMouseOut={(e) => (e.target.style.background = "transparent")}
          >
            ✚ Nouvelle conversation
          </button>

          {/* IoT Status Panel */}
          <div
            style={{
              margin: "0 1rem",
              padding: "0.8rem",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              fontSize: "0.8rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "#e67e22",
                fontSize: "0.85rem",
              }}
            >
              Foyer Apeli
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
              <span>Temp.</span>
              <span style={{ color: iotData.temperature > 200 ? "#e74c3c" : iotData.temperature > 100 ? "#e67e22" : "#2ecc71", fontWeight: "600" }}>
                {iotData.temperature}°C
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
              <span>Ventilo</span>
              <span style={{ fontWeight: "600" }}>{iotData.ventilateur}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
              <span>Poids</span>
              <span style={{ fontWeight: "600" }}>{iotData.weight} kg</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Statut</span>
              <span style={{ color: iotData.statut === "connecté" ? "#2ecc71" : "#e74c3c", fontWeight: "600" }}>● {iotData.statut}</span>
            </div>
            {iotData.alerts && iotData.alerts.length > 0 && (
              <div style={{ marginTop: "0.5rem", padding: "0.4rem", background: "rgba(231,76,60,0.2)", borderRadius: "4px", fontSize: "0.7rem", color: "#e74c3c" }}>
                ⚠️ {iotData.alerts[0]}
              </div>
            )}
          </div>

          {/* Conversations list */}
          <div style={{ flex: 1, overflowY: "auto", padding: "0 0.5rem" }}>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => {
                  setActiveConversation(conv.id);
                  if (isMobile) setSidebarOpen(false);
                }}
                style={{
                  padding: "0.7rem 0.8rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  background: activeConversation === conv.id ? "rgba(255,255,255,0.1)" : "transparent",
                  marginBottom: "0.2rem",
                  fontSize: "0.85rem",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {conv.title}
              </div>
            ))}
          </div>

          {/* MCP Server Status */}
          <div
            style={{
              padding: "1rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: iotData.statut === "connecté" ? "#2ecc71" : "#e74c3c", fontSize: "0.6rem" }}>●</span>
              Serveur MCP {iotData.statut === "connecté" ? "connecté" : "déconnecté"}
            </div>
            <div style={{ marginTop: "0.3rem" }}>
              Ventilateur : {iotData.fanSpeed}% | {iotData.ventilateur}
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Chat header */}
        <div
          style={{
            padding: isMobile ? "0.6rem 0.8rem" : "0.8rem 1rem",
            borderBottom: "1px solid #e5e5e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "white",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0, flex: 1 }}>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  padding: "0.3rem",
                  flexShrink: 0,
                }}
              >
                ☰
              </button>
            )}
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: "600", fontSize: isMobile ? "0.85rem" : "1rem", color: "#2c3e50", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                ApeliChef — Assistant Cuisine IA
              </div>
              {!isMobile && (
                <div style={{ fontSize: "0.75rem", color: "#7f8c8d" }}>
                  RAG + LLM Cuisine • Connecté au foyer amélioré Apeli
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: isMobile ? "0.5rem" : "1rem",
              fontSize: isMobile ? "0.7rem" : "0.8rem",
              color: "#7f8c8d",
              flexShrink: 0,
            }}
          >
            <span style={{ background: "#f0f0f0", padding: "0.2rem 0.5rem", borderRadius: "6px" }}>{iotData.temperature}°C</span>
          </div>
        </div>

        {/* Messages area */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: isMobile ? "0.5rem" : "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  maxWidth: isMobile ? "90%" : "70%",
                  padding: "1rem 1.2rem",
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  background: msg.role === "user" ? "#e67e22" : "white",
                  color: msg.role === "user" ? "white" : "#2c3e50",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  wordBreak: "break-word",
                }}
              >
                {msg.role === "assistant" ? (
                  <div dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }} />
                ) : (
                  msg.content
                )}
                <div
                  style={{
                    fontSize: "0.65rem",
                    marginTop: "0.5rem",
                    opacity: 0.5,
                    textAlign: msg.role === "user" ? "right" : "left",
                  }}
                >
                  {new Date(msg.timestamp).toLocaleTimeString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "18px 18px 18px 4px",
                  background: "white",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  fontSize: "0.9rem",
                  color: "#7f8c8d",
                }}
              >
                <span className="typing-dots">
                  ApeliChef réfléchit
                  <span style={{ animation: "blink 1.4s infinite" }}>.</span>
                  <span style={{ animation: "blink 1.4s infinite 0.2s" }}>.</span>
                  <span style={{ animation: "blink 1.4s infinite 0.4s" }}>.</span>
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div
          style={{
            padding: isMobile ? "0.6rem 0.5rem" : "1rem",
            borderTop: "1px solid #e5e5e5",
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              maxWidth: "800px",
              margin: "0 auto",
              alignItems: "flex-end",
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isMobile ? "Posez votre question..." : "Demandez une recette, vérifiez la température, contrôlez le ventilateur..."}
              rows={1}
              style={{
                flex: 1,
                padding: isMobile ? "0.6rem 0.8rem" : "0.8rem 1rem",
                border: "1px solid #ddd",
                borderRadius: "12px",
                fontSize: isMobile ? "16px" : "0.9rem",
                resize: "none",
                outline: "none",
                fontFamily: "inherit",
                maxHeight: "120px",
                minHeight: "44px",
                lineHeight: "1.4",
                WebkitAppearance: "none",
              }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              style={{
                padding: "0.8rem 1.2rem",
                background: input.trim() && !isLoading ? "#e67e22" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: input.trim() && !isLoading ? "pointer" : "default",
                fontSize: "1rem",
                transition: "background 0.2s",
                minHeight: "44px",
                minWidth: "44px",
              }}
            >
              ➤
            </button>
          </div>
          {!isMobile && (
            <p
              style={{
                textAlign: "center",
                fontSize: "0.7rem",
                color: "#999",
                margin: "0.5rem 0 0",
              }}
            >
              ApeliChef — IA cuisine connectée au foyer amélioré Apeli • Innovation Crunch Time 2026
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
