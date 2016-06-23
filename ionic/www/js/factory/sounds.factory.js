'use strict';

/**
 * @ngdoc service
 * @name soundscapesApp.SoundsFactory
 * @description
 * # SoundsFactory
 * Factory in the soundscapesApp.
 */
angular.module('app')
  .factory('SoundsFactory', function () {
    console.log('SoundsFactory');

    var npsPack = [
      {
        title: 'Crickets',
        category: 'Insects',
        image: {
          file: 'Crickets.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'crickets.mp3',
          info: 'This sound was recorded at Mojave National Preserve in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_crickets.png',
          credit: 'NPS'
        }
      },{
        title: 'Green Treefrog',
        category: 'Amphibians',
        image: {
          file: 'GreenTreeFrog_Credit_NPS_TheresaThom.JPG',
          credit: 'NPS/Thereas Thom',
        },
        sound: {
          file: 'green tree frog.mp3',
          info: 'This sound was recorded at Everglades National Park in Florida.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_green-tree-frog.png',
          credit: 'NPS'
        }
      },{
        title: 'Humpback Whale',
        category: 'Mammals',
        image: {
          file: 'Humpack_Whale_credit_NPS_Tom_Fake.jpg',
          credit: 'NPS/Tom Fake'
        },
        sound: {
          file: 'humpback whale.mp3',
          info: 'This sound was recorded at Glacier Bay National Park and Preserve in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_humpback-whale.png',
          credit: 'NPS'
        }
      },{
        title: 'Thunder',
        category: 'Meteorological',
        image: {
          file: 'Lightning_Yellowstone_NPS.jpg',
          info: 'Yellowstone',
          credit: 'NPS'
        },
        sound: {
          file: 'thunder.mp3',
          info: 'This sound was recorded at North Cascades National Park in Washington.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_thunder.png',
          credit: 'NPS'
        }
      },{
        title: "Couch's Spadefoot Toad",
        category: 'Amphibians',
        image: {
          file: 'CouchsSpadefootToad_CreditNPS_JamesBorgmeyer.jpg',
          credit: 'NPS/James Borgmeyer' 
        },
        sound: {
          file: 'Couch Spadefoot Toad.mp3',
          info: 'This sound was recorded at Saguaro National Park in Arizona.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_couch-spadefoot-toad.png',
          credit: 'NPS'
        }
      },{
        title: 'Alligator',
        category: 'Reptiles',
        image: {
          file: 'alligator_lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'alligator.mp3',
          info: 'This sound was recorded in August 2008 at Everglades National Park.<br><br>Note that a pig frog is also audible in the last quarter of this recording.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_alligator.png',
          credit: 'NPS'
        }
      },{
        title: 'Pig Frog',
        category: 'Amphibians',
        image: {
          file: 'PigFrog_credit_USGS_JWillson.jpg',
          credit: 'USGS/J. Willson'
        },
        sound: {
          file: 'pig frog.mp3',
          info: 'This sound was recorded at Everglades National Park in Florida',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_pig-frog.png',
          credit: 'NPS'
        }
      },{
        title: 'Avalanche',
        category: 'Geological',
        image: {
          file: 'Avalanche_UpperIngrahamGlacierMountRainier_lg.jpg',
          info: 'Upper Ingraham Glacier, Mount Rainier',
          credit: 'NPS'
        },
        sound: {
          file: 'avalanche.mp3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_avalanche.png',
          credit: 'NPS'
        }
      },{
        title: 'Bighorn Sheep Ramming Heads',
        category: 'Mammals',
        image: {
          file: 'bighornheadbutting_sm.JPG',
          credit: 'NPS'
        },
        sound: {
          file: 'big horn sheep.mp3',
          info: 'This sound was recorded at Zion National Park in Utah.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_big-horn-sheep.png',
          credit: 'NPS'
        }
      },{
        title: 'Ground Squirrel',
        category: 'Mammals',
        image: {
          file: 'WyomingGroundSquirrel.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'ground squirrel.mp3',
          info: 'This sound was recorded in Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_ground-squirrel.png',
          credit: 'NPS'
        }
      },{
        title: 'Wolf',
        category: 'Mammals',
        image: {
          file: 'Wolf_credit_FWS.jpg',
          credit: 'USFWS/Gary Kramer'
        },
        sound: {
          file: 'wolf.mp3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_wolf.png',
          credit: 'NPS'
        }
      },{
        title: 'Gulf Toad Fish',
        category: 'Fish',
        image: {
          file: 'gulftoadfish_lg_TexasParksandWildlife.jpg',
          credit: 'Texas Parks and Wildlife Department'
        },
        sound: {
          file: 'gulf toad fish.mp3',
          info: 'This sound was recorded at Everglades National Park in Florida.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_gulf-toad-fish.png',
          credit: 'NPS'
        }
      },{
        title: 'Rockfall',
        category: 'Geological',
        image: {
          file: 'Rockfall_NOCA010_20090815_023035.jpeg',
          credit: 'NPS'
        },
        sound: {
          file: 'rockfall.mp3',
          info: 'This sound was recorded at North Cascades National Park in Washington.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_rockfall.png',
          credit: 'NPS'
        }
      },{
        title: 'Coyote Chase',
        category: 'Mammals',
        image: {
          file: 'CoyotePack_NPS_JimPeaco_lg.jpg',
          credit: 'NPS/Jim Peaco'
        },
        sound: {
          file: 'coyote chase.mp3',
          info: 'Great Sand Dunes National Park and Preserve<br>September 2008',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_coyote-chase.png',
          credit: 'NPS'
        }
      },{
        title: 'Killer Whale',
        category: 'Mammals',
        image: {
          file: 'Orca.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'killer whale.mp3',
          info: 'This sound was recorded at Glacier Bay National Park and Preserve in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_killer-whale.png',
          credit: 'NPS'
        }
      },
    ];

    var sw1Pack = [
      {
        title: 'Upland Chorus Frogs',
        category: 'Arabia Mountain',
        image: {
          file: 'chorus-frog.jpg',
          info: 'This photo was taken in Back Bay National Wildlife Refuge, Virginia, U.S.',
          credit: '<a href="http://digitalmedia.fws.gov/cdm/singleitem/collection/natdiglib/id/12030/rec/3">USFWS, NCTC Image Library, public domain</a>'
        },
        sound: {
          file: 'upland chorus frogs - Arabia.mp3',
          info: 'This sound was recorded at Arabia Mountain National Heritage Area in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Arabia-upland.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Lapping Waves, Sunny Day',
        category: 'Cumberland Island',
        image: {
          file: 'lapping-waves.jpeg',
          info: '<a href="https://unsplash.com/photos/yXAtOOBwFNY">This photo was taken in Karwia, Władysławowo, Poland</a>. ',
          credit: 'Kamil Manka, license: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a>'
        },
        sound: {
          file: 'lapping waves, sunny day - cumberland.mp3',
          info: 'This sound was recorded at Cumberland Island National Seashore in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Cumberland-lapping-waves.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Breaking Wave',
        category: 'Cumberland Island',
        image: {
          file: 'breaking-wave.jpeg',
          info: '',
          credit: '<a href="https://unsplash.com/photos/LiCruQYCdnc">Photo by Austin Schmid</a>, License: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a>'
        },
        sound: {
          file: 'breaking wave - cumberland.mp3',
          info: 'This sound was recorded at Cumberland Island National Seashore in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Cumberland-breaking-wave.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Barred Owl, distant',
        category: 'Okefenokee Swamp',
        image: {
          file: 'barred-owl.jpg',
          info: 'This photo was taken in South Carolina, U.S.',
          credit: '<a href="http://digitalmedia.fws.gov/cdm/singleitem/collection/natdiglib/id/14142/rec/1">Mark Musselman/National Audubon Society, U.S. Fish and Wildlife Service, public domain</a>'
        },
        sound: {
          file: 'Barred Owl, distant - oke.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Oke-Barred-Owl-distant.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Black Crowned Night Heron',
        category: 'Okefenokee Swamp',
        image: {
          file: 'black-crowned-night-heron.jpg',
          info: 'This photo was taken on Alcatraz Island',
          credit: '<a href="http://www.nps.gov/media/photo/view.htm?id=ECC797FE-155D-4519-3EC65BBF661176B2">NPS, public domain</a>'
        },
        sound: {
          file: 'black crowned night heron-single caw oke.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Oke-black-crowned-night-heron-single-caw.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Plane - Low',
        category: 'Okefenokee Swamp',
        image: {
          file: 'plane1.jpeg',
          info: '',
          credit: '<a href="https://unsplash.com/photos/0GI_BEl6BXI">Photo by Rob Schreckhise</a>, license: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a>'
        },
        sound: {
          file: 'Plane - low.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Oke-plane-low.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Barred Owl with Frog Plop',
        category: 'Okefenokee Swamp',
        image: {
          file: 'plop.jpg',
          info: 'This photo was taken in Acadia National Park.',
          credit: '<a href="plop.jpg">NPS, public domain</a>'
        },
        sound: {
          file: 'Barred Owl -frog plop - oke.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Oke-Barred-Owl-frog-plop.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Sand Sizzle',
        category: 'Cumberland Island',
        image: {
          file: 'sand-sizzle.jpg',
          info: '',
          credit: '<a href="https://unsplash.com/photos/vigsqYux_-8">Photo by Sarah Bürvenich</a>, license: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a>'
        },
        sound: {
          file: 'sand sizzle - cumberland.mp3',
          info: 'This sound was recorded at Cumberland Island National Seashore in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Cumberland-sand-sizzle.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Breaking Wave',
        category: 'Okefenokee Swamp',
        image: {
          file: 'wave.jpeg',
          info: '<a href="https://unsplash.com/photos/savOaIMns3Y">This photo was taken in Bodrum, Turkey.</a>',
          credit: 'Alia Wilhelm, license: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a>'
        },
        sound: {
          file: 'breaking wave 2 - cumberland.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Cumberland-breaking-wave-2.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Great Horned Owl with traffic, birds, roosters',
        category: 'Arabia Mountain',
        image: {
          file: 'great-horned-owl.jpg',
          info: '',
          credit: '<a href="http://digitalmedia.fws.gov/cdm/singleitem/collection/natdiglib/id/12826/rec/1">USFWS, public domain</a>'
        },
        sound: {
          file: 'Great Horned Owl - w_lots of anthrophony -  Arabia.mp3',
          info: 'This sound was recorded at Arabia Mountain National Heritage Area in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Arabia-Great-Horned-Owl.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Plane - High to Low',
        category: 'Okefenokee Swamp',
        image: {
          file: 'plane2.jpeg',
          info: '',
          credit: '<a href="https://unsplash.com/photos/oLU4_n6c2CY">Photo by Daria Sukhorukova</a>, license: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a>'
        },
        sound: {
          file: 'Plane - high to low - oke.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Oke-plane-high-to-low.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Frog & Barred Owl',
        category: 'Okefenokee Swamp',
        image: {
          file: 'frog.jpeg',
          info: '',
          credit: '<a href="https://unsplash.com/photos/O-TM2E-7cn4">Photo by Wayne Robinson</a>, license: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a>'
        },
        sound: {
          file: 'frog_Barred Owl - oke.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Oke-frog-barred-owl.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Red Tailed Hawk',
        category: 'Okefenokee Swamp',
        image: {
          file: 'red-tailed-hawk.jpg',
          info: 'This photo was taken in Tonto National Monument.',
          credit: '<a href="http://www.nps.gov/media/photo/view.htm?id=6ADEA671-155D-451F-678CFDAAAE296CAF">NPS, public domain</a>'
        },
        sound: {
          file: 'Red Tailed Hawk - oke.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Oke-Red-Tailed-Hawk.png',
          credit: 'Stephen Wood'
        }
      },{
        title: 'Sandhill Crane with Takeoff',
        category: 'Okefenokee Swamp',
        image: {
          file: 'sandhill-crane.jpg',
          info: '',
          credit: '<a href="http://digitalmedia.fws.gov/cdm/singleitem/collection/natdiglib/id/11258/rec/33">USFWS, public domain</a>'
        },
        sound: {
          file: 'Sandhill w_take off - oke.mp3',
          info: 'This sound was recorded at Okefenokee Swamp in Georgia.',
          credit: 'Stephen Wood'
        },
        spectrogram: {
          file: 'Spectro_Oke-sandhill-w-take-off.png',
          credit: 'Stephen Wood'
        }
      }
    ];

    var packs = {
      'SW1': {
        shortTitle: 'SW1',
        title: 'Stephen Wood - Georgia',
        featuredPhoto: '../resources/SW1/sand-sizzle.jpg',
        pack: sw1Pack
      },
      'Space': {
        shortTitle: 'Space',
        title: 'Space Sounds',
        featuredPhoto: 'https://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/apod.jpg',
        pack: []
      },
      'NPS': {
        shortTitle: 'NPS',
        title: 'U.S. National Park Service',
        featuredPhoto: '../resources/NPS/Orca.jpg',
        pack: npsPack
      }
    };

    function getPacks() {
      return packs;
    }

    function sortByKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      })
    }

    function getCategories(pack) {
      var unique = {};
      var categories = [];
      for (var i in pack) {
        if (typeof(unique[pack[i].category]) == "undefined") {
          categories.push(pack[i].category);
        }
        unique[pack[i].category] = 0;
      }

      return categories;
    }

    // return the items of a pack, sorted by category and title
    function getExplore(packName) {
      var pack = packs[packName];
      var explorePack = angular.copy(pack);
      var categories = getCategories(explorePack.pack);
      categories.sort();
      explorePack.pack = [];
      // add cards for each category
      for (var category in categories) {
        explorePack.pack.push({'category': categories[category]});
        explorePack.pack[category].cards = angular.copy(pack).pack.filter(function (value, index, array) {
          return (value.category === categories[category]);
        });
        // inside each category, sort by title
        sortByKey(explorePack.pack[category].cards, 'title');
        // adjust paths of resources
        for (var i in explorePack.pack[category].cards) {
          var card = explorePack.pack[category].cards[i];
          card.image.file = "resources/" + packName + '/' + card.image.file;
          card.sound.file = "resources/" + packName + '/' + card.sound.file;
          card.spectrogram.file = "resources/" + packName + '/' + card.spectrogram.file;
        }
      };
      return explorePack;
    }

    function getSound(id) {
      return npsPack[id];
    }

    function getQuiz(packName, sound) {      
      var pack = angular.copy(packs[packName].pack);
      var quiz = {};
      quiz.title = pack[sound].title;
      quiz.image = pack[sound].image;
      quiz.sound = pack[sound].sound;
      quiz.image.file = "resources/" + packName + '/' + quiz.image.file;
      quiz.sound.file = "resources/" + packName + '/' + quiz.sound.file;
      quiz.correctSpectrogramIndex = Math.floor(Math.random() * 4);
      quiz.spectrograms = ["", "", "", ""];
      quiz.spectrograms[quiz.correctSpectrogramIndex] = pack[sound].spectrogram;
      var remainingSpectrograms = angular.copy(pack); // remainingSpectrograms are the three other possible options that will be displayed along with the correct one
      remainingSpectrograms.splice(sound, 1);
      for (var i = 0; i < quiz.spectrograms.length; i++) {
        if (quiz.spectrograms[i] === "") {
          // pick a random one from remainingSpectrograms
          var index = Math.floor(Math.random() * remainingSpectrograms.length);
          // put it at i in quiz.spectrograms
          quiz.spectrograms[i] = remainingSpectrograms[index].spectrogram;
          // splice it from remainingSpectrograms
          remainingSpectrograms.splice(index, 1);
        }
        quiz.spectrograms[i].file = "resources/" + packName + '/' + quiz.spectrograms[i].file;
      }
      quiz.remainingSpectrograms = remainingSpectrograms;
      quiz.packTitle = packs[packName].title;
      quiz.packSize = pack.length;
      return quiz;
    }

    // Public API here
    return {
      getPacks: getPacks,
      getSound: getSound,
      getQuiz: getQuiz,
      getExplore: getExplore
    };
  });
