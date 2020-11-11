import React from 'react'

export default function Menu() {
    return (
       <aside className="main-sidebar sidebar-dark-primary elevation-4">
  
  <a href="index3.html" className="brand-link">
    <span className="brand-text font-weight-light">PANEL DE CONTROL</span>
  </a>
  
  <div className="sidebar">
    <div className="panel mt-3 pb-3 mb-3 d-flex">
    </div>
    {/* Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Metricas
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Files
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Busqueda Pregunta</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Archivos de preguntas</p>
              </a>
            </li>
            
            <li className="nav-item">
              <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Agregar Pregunta</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
             <i className="nav-icon fas fa-edit" />
            <p>
              Comunidad
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/charts/chartjs.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Contacto</p>
              </a>
            </li>
            
            <li className="nav-item">
              <a href="pages/charts/inline.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/inline.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Preguntas Usuario</p>
              </a>
            </li>
          </ul>
        </li>
        
         
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">                   
             <i className="nav-icon fas fa-chart-pie" />
            <p>
              Forms
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>General</p>
              </a>
            </li>
            
            <li className="nav-item">
              <a href="pages/forms/editors.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Editor</p>
              </a>
            </li>
            
          </ul>
        </li>    
        <li className="nav-header">ALERTAS</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-danger" />
            <p className="text">Important</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-warning" />
            <p>Warning</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-info" />
            <p>Informational</p>
          </a>
        </li>
      </ul>
    </nav>
    
  </div>
  
</aside>

    )
}