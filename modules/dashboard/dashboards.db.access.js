import log4js from 'log4js';
import Dashboard from '../../schema/dashboard';

const logger = log4js.getLogger('Dashboard DB Access');

logger.level = 'debug';

exports.getDashboard = () => {

    return new Promise((resolve, rejects) => {

        Dashboard.find((error, docs) => {
            if(!error && docs) {

                return resolve({success: true, message: 'Dashboard retrieved successfully', data: docs});

            } 

            return rejects({success: false, message: 'Failed to retrieve the dashboard', data: docs});;
        })

    })

}

exports.createDashboard = (dashData) => {

    return new Promise((resolve, rejects) => {

        Dashboard.findOne({name: dashData.name}, (error, docs) => {

            if (!error && docs) {

                return rejects({success: false, message: 'Dashboard ' + dashData.name + ' already exists', data: error});

            } else {

                let dashboard = new Dashboard({
                    name: dashData.name,
                    description: dashData.description,
                    path: dashData.path,
                })

                dashboard.save((saveError, saveDocs) => {

                    if(!saveError && saveDocs) {

                        return resolve({success: true, message: 'Dashboard save successfully', data: saveDocs});

                    }

                    return rejects({success: false, message: 'Failed to save the dashboard', data: saveError});
                })

            }
        })

    });
}

exports.updateDashboard = (dashData) => {

    return new Promise((resolve, rejects) => {

        Dashboard.findOne({name: dashData.name}, (error, docs) => {

            if (!error && docs) {

                docs.name = dashData.name;
                docs.description = dashData.description;
                docs.path = dashData.path;

                docs.save({}, (saveError, saveDocs) => {

                    if (!saveError && saveDocs)
                        return resolve({success: true, message: 'Dashboard has been updated successfully', data: saveDocs});

                    return rejects({success: false, message: 'Failed to update the dashboard', data: saveError});

                })

            } else {

                return rejects({success: false, message: 'Dashboard ' + dashData.name + ' does not exit', data: error});

            }

        });

    })

}

