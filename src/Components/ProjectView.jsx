/**
 * ProjectView component - Vue détaillée d'un projet (accessible depuis la liste admin et portfolio)
 */

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowLeft, 
  faCalendarAlt, 
  faUser, 
  faTag, 
  faDollarSign,
  faClock,
  faCheckCircle,
  faTasks,
  faLink,
  faDownload,
  faImage,
  faCode,
  faLayerGroup,
  faUsers,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simuler un chargement
    setTimeout(() => {
      const savedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      const foundProject = savedProjects.find(p => p.id === parseInt(id));
      
      if (foundProject) {
        // Si le projet n'a pas d'images, ajouter des images par défaut basées sur la catégorie
        const projectWithDetails = {
          ...foundProject,
          images: foundProject.images || getDefaultImages(foundProject.category),
          references: foundProject.references || getDefaultReferences(foundProject.category),
          technologies: foundProject.technologies || getDefaultTechnologies(foundProject.category),
          milestones: foundProject.milestones || getDefaultMilestones(foundProject),
          teamMembers: foundProject.teamMembers || getDefaultTeamMembers()
        };
        setProject(projectWithDetails);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const getDefaultImages = (category) => {
    // Images par défaut basées sur la catégorie du projet
    const imageCategories = {
      'web': [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      'mobile': [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      'design': [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      'default': [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    };
    
    return imageCategories[category?.toLowerCase()] || imageCategories.default;
  };

  const getDefaultReferences = (category) => {
    // Références par défaut basées sur la catégorie
    return [
      {
        id: 1,
        title: "Documentation technique",
        type: "pdf",
        url: "#",
        size: "2.4 MB",
        icon: faDownload
      },
      {
        id: 2,
        title: "Spécifications fonctionnelles",
        type: "doc",
        url: "#",
        size: "1.8 MB",
        icon: faDownload
      },
      {
        id: 3,
        title: "Maquettes et wireframes",
        type: "zip",
        url: "#",
        size: "5.2 MB",
        icon: faDownload
      },
      {
        id: 4,
        title: "Lien vers la démo",
        type: "link",
        url: "#",
        icon: faLink
      }
    ];
  };

  const getDefaultTechnologies = (category) => {
    const techCategories = {
      'web': ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Redux'],
      'mobile': ['React Native', 'iOS Swift', 'Android Kotlin', 'Firebase', 'GraphQL'],
      'design': ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
      'default': ['JavaScript', 'HTML5', 'CSS3', 'Git', 'REST API']
    };
    return techCategories[category?.toLowerCase()] || techCategories.default;
  };

  const getDefaultMilestones = (project) => {
    const startDate = new Date(project.startDate);
    const deadline = new Date(project.deadline);
    
    return [
      {
        id: 1,
        title: "Analyse des besoins",
        date: new Date(startDate.getTime() + (deadline - startDate) * 0.2),
        completed: true,
        description: "Recueil des exigences client"
      },
      {
        id: 2,
        title: "Conception",
        date: new Date(startDate.getTime() + (deadline - startDate) * 0.4),
        completed: true,
        description: "Maquettes et architecture"
      },
      {
        id: 3,
        title: "Développement",
        date: new Date(startDate.getTime() + (deadline - startDate) * 0.6),
        completed: project.status === 'completed' || project.status === 'in-progress',
        description: "Implémentation des fonctionnalités"
      },
      {
        id: 4,
        title: "Tests",
        date: new Date(startDate.getTime() + (deadline - startDate) * 0.8),
        completed: project.status === 'completed',
        description: "Validation et recette"
      },
      {
        id: 5,
        title: "Livraison",
        date: deadline,
        completed: project.status === 'completed',
        description: "Déploiement et formation"
      }
    ];
  };

  const getDefaultTeamMembers = () => {
    return [
      { id: 1, name: "Jean Dupont", role: "Lead Developer", avatar: "https://i.pravatar.cc/150?img=1" },
      { id: 2, name: "Marie Lambert", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=5" },
      { id: 3, name: "Thomas Martin", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=8" },
      { id: 4, name: "Sophie Bernard", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=11" }
    ];
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'paused': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return 'Terminé';
      case 'in-progress': return 'En cours';
      case 'pending': return 'En attente';
      case 'paused': return 'En pause';
      default: return 'Inconnu';
    }
  };

  const calculateProgress = (tasks) => {
    if (!tasks || tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.status === 'completed').length;
    return Math.round((completed / tasks.length) * 100);
  };

  const nextImage = () => {
    if (project?.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (project?.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projet non trouvé</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Le projet que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg transition-all"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header avec bouton retour */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </span>
                <span className="text-sm text-gray-500">
                  {project.category || 'Non catégorisé'}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
              <p className="text-gray-600 mt-3 text-lg max-w-3xl">{project.description}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-gray-500">Client</p>
                <p className="font-semibold text-gray-900">{project.clientName}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {project.clientName?.charAt(0) || 'C'}
              </div>
            </div>
          </div>
        </div>

        {/* Onglets de navigation */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8">
            {['overview', 'gallery', 'tasks', 'milestones', 'team', 'references'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'overview' && 'Aperçu'}
                {tab === 'gallery' && 'Galerie'}
                {tab === 'tasks' && 'Tâches'}
                {tab === 'milestones' && 'Étapes'}
                {tab === 'team' && 'Équipe'}
                {tab === 'references' && 'Références'}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section principale - Contenu dynamique selon l'onglet */}
          <div className="lg:col-span-2 space-y-8">
            {activeTab === 'overview' && (
              <>
                {/* Galerie d'images principale */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={project.images[currentImageIndex]}
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-80 md:h-96 object-cover"
                        />
                        
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                            >
                              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                            >
                              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentImageIndex 
                                      ? 'bg-white scale-125' 
                                      : 'bg-white/50 hover:bg-white/80'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Description du projet</h3>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {project.detailedDescription || project.description}
                      </p>
                      {project.extendedDescription && (
                        <p className="text-gray-600 leading-relaxed">
                          {project.extendedDescription}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Progression et métriques */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Progression</h4>
                        <p className="text-sm text-gray-500">Avancement global</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Tâches complétées</span>
                          <span className="text-sm font-bold text-blue-600">
                            {calculateProgress(project.tasks)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-700" 
                            style={{ width: `${calculateProgress(project.tasks)}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          {project.tasks ? project.tasks.filter(t => t.status === 'completed').length : 0} tâches terminées
                        </span>
                        <span className="text-gray-500">
                          sur {project.tasks ? project.tasks.length : 0} au total
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-green-600 text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Calendrier</h4>
                        <p className="text-sm text-gray-500">Dates clés</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Début du projet</p>
                          <p className="font-medium">{new Date(project.startDate).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Échéance</p>
                          <p className="font-medium">{new Date(project.deadline).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500">Durée estimée</p>
                        <p className="font-medium">
                          {Math.ceil((new Date(project.deadline) - new Date(project.startDate)) / (1000 * 60 * 60 * 24))} jours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'gallery' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Galerie du projet</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images?.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative group cursor-pointer"
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <FontAwesomeIcon icon={faImage} className="text-white text-2xl" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tâches du projet</h3>
                {project.tasks && project.tasks.length > 0 ? (
                  <div className="space-y-4">
                    {project.tasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <FontAwesomeIcon 
                            icon={task.status === 'completed' ? faCheckCircle : faClock} 
                            className={`mr-4 text-lg ${task.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`} 
                          />
                          <div>
                            <p className={`font-medium ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                              {task.name}
                            </p>
                            {task.description && (
                              <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'Non daté'}
                          </p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            task.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {task.status === 'completed' ? 'Terminé' : 'En cours'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">Aucune tâche définie pour ce projet</p>
                )}
              </div>
            )}

            {activeTab === 'milestones' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Étapes clés du projet</h3>
                <div className="relative">
                  {/* Ligne de timeline */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-8">
                    {project.milestones?.map((milestone, index) => (
                      <div key={milestone.id} className="relative pl-16">
                        {/* Point sur la timeline */}
                        <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                          milestone.completed 
                            ? 'bg-green-500 border-green-100' 
                            : 'bg-white border-gray-300'
                        }`}></div>
                        
                        <div className={`p-5 rounded-xl ${
                          milestone.completed 
                            ? 'bg-green-50 border border-green-100' 
                            : 'bg-gray-50 border border-gray-100'
                        }`}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                              <p className="text-gray-600 mt-1">{milestone.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-gray-700">
                                {milestone.date.toLocaleDateString()}
                              </p>
                              <span className={`text-xs px-2 py-1 rounded-full mt-1 ${
                                milestone.completed 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {milestone.completed ? 'Terminé' : 'À venir'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Équipe du projet</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.teamMembers?.map((member) => (
                    <div key={member.id} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-gray-600 text-sm">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'references' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents et références</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.references?.map((ref) => (
                    <a
                      key={ref.id}
                      href={ref.url}
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                          <FontAwesomeIcon icon={ref.icon || faDownload} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 group-hover:text-blue-600">{ref.title}</p>
                          {ref.size && (
                            <p className="text-xs text-gray-500">{ref.type.toUpperCase()} • {ref.size}</p>
                          )}
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Informations fixes */}
          <div className="space-y-8">
            {/* Informations du projet */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informations du projet</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faUser} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-semibold text-gray-900">{project.clientName}</p>
                    <p className="text-sm text-gray-600">{project.clientEmail}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Période</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.deadline).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faTag} className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Catégorie</p>
                    <p className="font-semibold text-gray-900">{project.category || 'Non catégorisé'}</p>
                  </div>
                </div>
                
                {project.budget && (
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faDollarSign} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Budget</p>
                      <p className="font-semibold text-gray-900">{project.budget}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technologies utilisées */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                <FontAwesomeIcon icon={faCode} className="mr-2 text-gray-700" />
                Technologies
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 text-sm font-medium rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Statistiques rapides */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-6">Aperçu rapide</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Statut</span>
                  <span className="font-semibold">{getStatusText(project.status)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Progression</span>
                  <span className="font-semibold">{calculateProgress(project.tasks)}%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Tâches</span>
                  <span className="font-semibold">
                    {project.tasks ? project.tasks.length : 0} au total
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Images</span>
                  <span className="font-semibold">
                    {project.images?.length || 0} visuels
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;