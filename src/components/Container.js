import React from 'react'

export default function Container() {
    return (
        <div className="content-wrapper">
  {/* Container Header */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Metrica mes</h1>
        </div>
        
      </div>
    </div>
  </div>
  
  {/* Main container */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between">
                <h3 className="card-title">Online Visitantes</h3>
                <a href="javascript:void(0);">Informe</a>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <p className="d-flex flex-column">
                  <span className="text-bold text-lg">820</span>
                  <span>Visitantes a lo largo del tiempo</span>
                </p>
                <p className="ml-auto d-flex flex-column text-right">
                  <span className="text-success">
                    <i className="fas fa-arrow-up" /> 12.5%
                  </span>
                  <span className="text-muted">De la Semana pasada</span>
                </p>
              </div>
              
              <div className="position-relative mb-4">
                <canvas id="sales-chart" height={200}/>
              </div>
              <div className="d-flex flex-row justify-content-end">
                <span className="mr-2">
                  <i className="fas fa-square text-primary" /> Esta semana
                </span>
                <span>
                  <i className="fas fa-square text-gray" /> Semana Pasada
                </span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-0">
              <h3 className="card-title">Visión general</h3>
              <div className="card-tools">
                <a href="#" className="btn btn-sm btn-tool">
                  <i className="fas fa-download" />
                </a>
                <a href="#" className="btn btn-sm btn-tool">
                  <i className="fas fa-bars" />
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                <p className="text-success text-xl">
                  <i className="ion ion-ios-refresh-empty" />
                </p>
                <p className="d-flex flex-column text-right">
                  <span className="font-weight-bold">
                    <i className="ion ion-android-arrow-up text-success" /> 12%
                  </span>
                  <span className="text-muted">CONVERSIÓN</span>
                </p>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p className="text-danger text-xl">
                  <i className="ion ion-ios-people-outline" />
                </p>
                <p className="d-flex flex-column text-right">
                  <span className="font-weight-bold">
                    <i className="ion ion-android-arrow-down text-danger" /> 1%
                  </span>
                  <span className="text-muted">INSCRIPCIÓNES</span>
                </p>
              </div>
              
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
   
  </div>
  
</div>

    )
}