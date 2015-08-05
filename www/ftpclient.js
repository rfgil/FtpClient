module.exports = {
     /**
     * Upload a file to a FTP server
     *
     * @param file              The file to be uploaded to the server
     * @param url               The url of the ftp server
     * @param successCallback   The success callback
     * @param errorCallback     The error callback
     */
	put: function(file, url, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "FtpClient", "put", [file, url]);
    },     

     /**
     * Download a file from a FTP server
     *
     * @param file              The file to be uploaded to the server
     * @param url               The url of the ftp server
     * @param successCallback   The success callback
     * @param errorCallback     The error callback
     */
    get: function(file, url, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "FtpClient", "get", [file, url]);
    }
};
