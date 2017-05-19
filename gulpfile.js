var gulp        = require('gulp'),
	browserSync = require('browser-sync');

// Static server
gulp.task('server', function() {
    browserSync.init({
    	port:9000,
        server: {
            baseDir: "app"
        }
    });
});

// or...

gulp.task('watch', function() {
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css'
    ]).on('change',browserSync.reload);
});

gulp.task('default',['server','watch']);