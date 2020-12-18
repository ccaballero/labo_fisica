const path=require('path'),
    report='informe5';

module.exports=(grunt)=>{
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        shell:{
            report:{
                command:(doc)=>{
                    return [
                        'latex -interaction=nonstopmode '+report
                      , 'dvipdf '+report
                    ].join(' && ');
                }
            }
        }
      , watch:{
            report:{
                files:[
                    report+'.tex',
                    'eps/*.eps',
                    'm/*.m',
                    'm/*.csv',
                    'm/*.txt'
                ]
              , tasks:['shell:report']
            }
        }
    });

    grunt.event.on('watch',(action,filepath,target)=>{
        var c=path.parse(filepath);

        grunt.config('watch.report.tasks','shell:report:'+c.dir);
    });

    grunt.registerTask('serve',[
        'watch'
    ]);
};

