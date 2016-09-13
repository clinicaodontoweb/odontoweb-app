var gulp			= require('gulp');
var concat			= require('gulp-concat');
var uglify			= require('gulp-uglify');
var sass			= require('gulp-sass');
var cssmin			= require('gulp-cssmin');
var watch			= require('gulp-watch');
var rename			= require('gulp-rename');
var runSequence		= require('run-sequence');
var browserSync		= require('browser-sync');

/* tasks */
gulp.task('default', function(callback){
	runSequence('deps-js', 'app-js', 'app-css', 'copy-fonts');
});

gulp.task('watch', function(){
	gulp.watch('src/resources/js/*.js', ['app-js']);
	gulp.watch('src/resources/sass/*.scss', ['app-css']);
});

gulp.task('deps-js', function (){
	return gulp.src(['bower_components/jquery/dist/jquery.js',
					'bower_components/foundation-sites/dist/foundation.js',
					'bower_components/angular/angular.js',
					'bower_components/underscore/underscore.js'])
			.pipe(concat('odontoweb-deps.js'))
			.pipe(gulp.dest('src/public'))
			.pipe(uglify())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('src/public'));
});

gulp.task('app-js', function (){
	return gulp.src(['src/resources/js/*.js'])
			.pipe(concat('odontoweb-app.js'))
			.pipe(gulp.dest('src/public'))
			.pipe(uglify())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('src/public'));
});

gulp.task('app-css', function (){
	return gulp.src(['src/resources/sass/*.scss'])
			.pipe(sass({
				includePaths: [
								'bower_components/foundation-sites/scss/', 
								'bower_components/foundation-icon-fonts/'
								]
			}))
			.pipe(rename('odontoweb-app.css'))
			.pipe(gulp.dest('src/public'))
			.pipe(cssmin())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('src/public'));
});

gulp.task('copy-fonts', function() {
	gulp.src('bower_components/foundation-icon-fonts/*.{ttf,woff,eot,svg}')
		.pipe(gulp.dest('src/public/fonts'));
});