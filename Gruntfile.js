module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-sass');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'demo/style.css': 'src/scss/demo.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true
				},
			},
			html: {
				files: 'demo/index.html',
				tasks: [],
				options: {
					livereload: true
				},
			},
		},
		connect: {
			static: {
				options: {
					base: 'demo',
					hostname: 'localhost',
					port: 8001,
					open: true,
					livereload: true,
				}
			}
		}

	});

	// Default task(s).
	grunt.registerTask('default', ['sass','connect','watch']);

};