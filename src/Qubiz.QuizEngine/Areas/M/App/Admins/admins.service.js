﻿(function () {
    'use strict';

    angular
		.module('quizEngineMaterial')
		.service('adminsService', adminsService);

    adminsService.$inject = ['$http', '$q'];

    function adminsService($http, $q) {
        this.getAllAdmins = getAllAdmins;
        this.AddAdmin = addAdmin;
        this.deleteAdmin = deleteAdmin;
        this.EditAdmin = editAdmin;
        this.GetById = getById;

        function getAllAdmins() {
            return $http({
                method: 'GET',
                url: 'api/Admin/GetAdmins'
            })
            .then(getAllAdminsSuccess)
            .catch(errorCallback);
        }

        function addAdmin(admin) {
            return $http({
                method: 'POST',
                url: 'api/Admin/AddAdmin',
                data: admin
            })
            .then()
            .catch(errorCallback);
        }

        function editAdmin(admin) {
            return $http({
                method: 'PUT',
                url: 'api/Admin/UpdateAdmin',
                data: admin
            })
            .then()
            .catch(errorCallback);
        }

        function getById(id) {
            return $http({
                method: 'GET',
                url: 'api/Admin/GetAdmin/' + id
            })
            .then()
            .catch();
        }

        function getAllAdminsSuccess(response) {
            return response.data;
        }

        function errorCallback(response) {
            return $q.reject('HTTP status: ' + response.status + ' - ' + response.statusText + '!');
        }

        function deleteAdmin(id) {
            return $http.delete('api/Admin/DeleteAdmin/' + id);
        }
    }
})()