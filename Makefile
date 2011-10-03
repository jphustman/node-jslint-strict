all:
	git submodule update --init
	git submodule foreach git checkout master
	git submodule foreach git pull
	./lib/mkjslint

clean:
	rm -f ./jslint.js
	rm -f ./jslint-strict.js
