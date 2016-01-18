[![Stories Ready](https://badge.waffle.io/ProximityViz/soundscapes.svg?label=ready&title=Ready)](http://waffle.io/ProximityViz/soundscapes)

[![Stories In Progress](https://badge.waffle.io/ProximityViz/soundscapes.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/ProximityViz/soundscapes)

## Installing the app locally
        npm install
        bower install
        ionic setup sass
        ionic serve

# Credits

* Spectrogram creation python script by [Frank Zalkow](http://www.frank-zalkow.de/en/code-snippets/create-audio-spectrograms-with-python.html?ckattempt=1), licensed under a [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/), 2012-2013.
* Spectrogram creation also utilizes:
	* NumPy, [license](http://www.numpy.org/license.html)
	* Matplotlib, [license](http://matplotlib.org/users/license.html)
	* SciPy, [license](http://scipy.org/scipylib/license.html)

# Creating spectrograms

## Creating WAV files
* Open mp3 in audacity
* Tracks -> Stereo Track to Mono
* Change selection end (bottom of window) to 00h 00m 10.000s
* Edit -> Remove Special -> Trim Audio (command-T)
* File -> Export Audio (shift-command-E)

## Creating spectrograms
* Change the last line of spectrogram.py to reference the relevant wav file
* Run `python spectrogram.py`
* Save the image
