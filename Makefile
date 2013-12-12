LIBRARY_FILES = \
	ext-lib/d3/start.js \
	ext-lib/d3/arrays/max.js \
	ext-lib/d3/arrays/min.js \
	ext-lib/d3/format/format.js \
	ext-lib/d3/geo/path.js \
	ext-lib/d3/interpolate/interpolate.js \
	ext-lib/d3/layout/pie.js \
	ext-lib/d3/event/mouse.js \
	ext-lib/d3/scale/category.js \
	ext-lib/d3/scale/linear.js \
	ext-lib/d3/selection/selection.js \
	ext-lib/d3/svg/arc.js \
	ext-lib/d3/svg/axis.js \
	ext-lib/d3/svg/line.js \
	ext-lib/d3/time/format.js \
	ext-lib/d3/time/month.js \
	ext-lib/d3/time/scale.js \
	ext-lib/d3/time/year.js \
	ext-lib/d3/transition/transition.js \
	ext-lib/d3/end.js

LIBRARY_FILES_YUI = \
	ext-lib/d3/start-yui.js \
	ext-lib/d3/arrays/max.js \
	ext-lib/d3/arrays/min.js \
	ext-lib/d3/format/format.js \
	ext-lib/d3/geo/path.js \
	ext-lib/d3/interpolate/interpolate.js \
	ext-lib/d3/layout/pie.js \
	ext-lib/d3/event/mouse.js \
	ext-lib/d3/scale/category.js \
	ext-lib/d3/scale/linear.js \
	ext-lib/d3/selection/selection.js \
	ext-lib/d3/svg/arc.js \
	ext-lib/d3/svg/axis.js \
	ext-lib/d3/svg/line.js \
	ext-lib/d3/time/format.js \
	ext-lib/d3/time/month.js \
	ext-lib/d3/time/scale.js \
	ext-lib/d3/time/year.js \
	ext-lib/d3/transition/transition.js \
	ext-lib/d3/end-yui.js

BASE_PATH = \
	ext-lib/d3/

json-config: $(LIBRARY_FILES)
	@rm -f $@
	./smash --jsonConfig $(LIBRARY_FILES) --basePath $(BASE_PATH) --modulePrefix d3- --targetDir /static/d3/ > target/d3-$@.js

graph: $(LIBRARY_FILES)
	@rm -f $@
	./smash --graph $(LIBRARY_FILES) > target/d3-$@.js

list: $(LIBRARY_FILES)
	@rm -f $@
	./smash --list $(LIBRARY_FILES) > target/d3-$@.js
