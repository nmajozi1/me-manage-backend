import budgetDB from './budgetDBAccess';
import log4js from 'log4js';
import { resolve } from 'path';
import { rejects } from 'assert';
const logger = log4js.getLogger('Budget Module');

exports.addBudget = (budgetData) => {

    return new Promise((resolve, rejects) => {

        budgetDB.CreateBudget(budgetData).then(response => { return resolve(response); }).catch(error => { return rejects(response);});

    });

}

exports.getBudgetList = () => {

    return new Promise((resolve, rejects) => {

        budgetDB.GetBudgetList().then(response => { return resolve(response)}).catch(error => { return rejects(error)});

    });
    
}

exports.updatePayment = (budgetData) => {

    return new Promise((resolve, rejects) => {

        budgetDB.PaymentUpdate(budgetData).then(response => { return resolve(response)}).catch(error => { return rejects(error)});

    });
}

exports.updateBudget = (budgetData) => {

    return new Promise((resolve, rejects) => {

        budgetDB.updateBudget(budgetData).then(response => { return resolve(response)}).catch(error => { return rejects(error)});
    });
}

exports.deleteBudget = (budgetData) => {

    return new Promise((resolve, rejects) => {

        budgetDB.delete(budgetData).then(response => { return resolve(response)}).catch(error => { return rejects(error)});
    });
}