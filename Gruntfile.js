moduel.exports = function(grunt){

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'hello.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-js');
	grunt.registerTask('default','jshint');
}