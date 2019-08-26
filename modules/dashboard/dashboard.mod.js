import dashboardDBAccess from './dashboards.db.access';
import log4js from 'log4js';
const logger = log4js.getLogger('Dashboard Route');

logger.level = 'debug'

exports.getDashboard = () => {

    return new Promise((resolve, rejects) => {

        dashboardDBAccess.getDashboard().then(response => {return resolve(response);}).catch(error => {return rejects(error);});
        
    })

}

exports.createDashboard = (dashData) => {

    return new Promise((resolve, rejects) => {

        dashboardDBAccess.createDashboard(dashData).then(response => {return resolve(response);}).catch(error => {return rejects(error);})

    })

}

exports.updateDashboard = (dashData) => {

    return new Promise((resolve, rejects) => {

        dashboardDBAccess.updateDashboard(dashData).then(response => {return resolve(response);}).catch(error => {return rejects(error);});

    });

}