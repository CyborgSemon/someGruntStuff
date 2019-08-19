module.exports = function(grunt) {
	grunt.initConfig({
		sass:{
			dist: {
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		},
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ['css/main.css']
			},
			lax: {
				options: {
					import: false
				},
				src: ['css/main.css']
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},
		jshint: {
			files: ['js/*.js', 'js/!*.min.js'],
			options: {
				'esversion': 6,
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/main.min.js': ['js/main.js']
				}
			}
		},
		watch: {
			sass: {
				files: ['scss/main.scss'],
				tasks: ['sass', 'csslint', 'cssmin']
			},
			js: {
				files: ['js/main.js'],
				tasks: ['jshint', 'uglify']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-sass');


	grunt.registerTask('default', ['watch'])
};