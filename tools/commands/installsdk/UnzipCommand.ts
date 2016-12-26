/// <reference path="../../lib/node.d.ts" />

import path = require("path");

class UnzipCommand {
    static unzip(srcPath, destPath, callback) : any {
        var compilerPath = path.join(__dirname, "../../lib/zip/Unzip.jar");        
        var cmd ='java -jar ' + compilerPath + " " + srcPath + ' ' + destPath;
        //console.log(cmd);
        
        var cp_exec1 = require('child_process').exec;
        var build = cp_exec1(cmd);
        build.stdout.on("data", function (data) {
            //console.log(data);
        });
        build.stderr.on("data", function (data) {
            //console.log(data);
        });

        build.on("exit", function (result) {
            if (callback) {
                callback(result);
            }
        });
                
        return build;
    };
}

export = UnzipCommand;