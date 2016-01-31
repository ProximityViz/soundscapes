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
        title: 'Killdeer',
        category: 'Birds',
        image: {
          file: 'Killdeer_credit_FWS.jpg',
          credit: 'USFWS/Jesse Achtenburg'
        },
        sound: {
          file: 'KILLDEER.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_KILLDEER.png',
          credit: 'NPS'
        }
      },{
        title: 'Osprey',
        category: 'Birds',
        image: {
          file: 'Osprey_USFWS.jpg',
          credit: 'USFWS'
        },
        sound: {
          file: 'Osprey_GRTE_2005_5_29.MP3',
          info: 'This sound was recorded at Grand Teton National Park in Wyoming.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Osprey_GRTE_2005_5_29.png',
          credit: 'NPS'
        }
      },{
        title: 'Spotted Bat',
        category: 'Mammals',
        image: {
          file: 'SpottedBat_NPS_BillRainey.jpg',
          credit: 'NPS/Bill Rainey'
        },
        sound: {
          file: 'Spotted_Bat_YOSE_7_4_2006.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Spotted_Bat_YOSE.png',
          credit: 'NPS'
        }
      },{
        title: 'Bison',
        category: 'Mammals',
        image: {
          file: 'Bison_USFWS_RyanHagerty_lg.jpg',
          credit: 'USFWS/Ryan Hagerty'
        },
        sound: {
          file: 'Bison_YELL.MP3',
          info: 'This sound was recorded at Yellowstone National Park in ID,MT,WY.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Bison_YELL.png',
          credit: 'NPS'
        }
      },{
        title: 'Crickets',
        category: 'Insects',
        image: {
          file: 'Crickets.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Cricket.mp3',
          info: 'This sound was recorded at Mojave National Preserve in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Crickets_MOJA.png',
          credit: 'NPS'
        }
      },{
        title: 'Common Raven',
        category: 'Birds',
        image: {
          file: 'CommonRavenNPS.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Common_Raven_GRTE.MP3',
          info: 'This sound was recorded at Grand Teton National Park in Wyoming.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Common_Raven_GRTE.png',
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
          file: 'GreenTreeFrog_2008-08-16_EvergladesNP.MP3',
          info: 'This sound was recorded at Everglades National Park in Florida.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_EVER002_greentreefrog.png',
          credit: 'NPS'
        }
      },{
        title: 'Spotted Owl',
        category: 'Birds',
        image: {
          file: 'Spotted_Owl_credit_FWS.jpg',
          credit: 'USFWS/John & Karen Hollingsworth'
        },
        sound: {
          file: 'Spotted_Owl_YOSE_7_14_2006.MP3',
          info: 'This sound was recorded at Yellowstone National Park in Wyoming',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Spotted_Owl_YOSE_7_14_2006.png',
          credit: 'NPS'
        }
      },{
        title: 'Ocean',
        category: 'Hydrological',
        image: {
          file: 'Ocean_NPS_lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Ocean_Olympic_NP.MP3',
          info: 'This sound was recorded at Olympic National Park in Washington.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Ocean_Olympic_NP.png',
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
          file: 'Humpback_GLBA_October2000.MP3',
          info: 'This sound was recorded at Glacier Bay National Park and Preserve in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Humpback_GLBA.png',
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
          file: 'Thunder.mp3',
          info: 'This sound was recorded at North Cascades National Park in Washington.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Thunder_Sound_Pic.png',
          credit: 'NPS'
        }
      },{
        title: 'Calliope Hummingbird',
        category: 'Birds',
        image: {
          file: 'CalliopeHummingbird.jpg',
          credit: 'NPS/Sally King'
        },
        sound: {
          file: 'Hummingbird_GRTE_2005_6_9.MP3',
          info: 'This sound was recorded at Grand Teton National Park in Wyoming.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Hummingbird_GRTE_2005_6_9.png',
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
          file: 'CouchsSpadefootToad_SaguaroNP_20110705.MP3',
          info: 'This sound was recorded at Saguaro National Park in Arizona.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_CouchsSpadefootToad.png',
          credit: 'NPS'
        }
      },{
        title: 'Car Alarm',
        category: 'Human-Caused',
        image: {
          file: 'TrafficJam_lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Car_Alarm_KEFJ_2008_07_26_0950.MP3',
          info: 'This sound was recorded at Kenai Fjords National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Car_Alarm_KEFJ_Sound.png',
          credit: 'NPS'
        }
      },{
        title: 'Siren',
        category: 'Human-Caused',
        image: {
          file: 'Siren_Wikimedia.jpg',
          credit: 'Wikimedia Commons'
        },
        sound: {
          file: 'Siren_GRTE_2004_6_7.MP3',
          info: 'This sound was recorded at Grand Teton National Park in Wyoming.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Siren_GRTE_2004_6_7.png',
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
          file: 'Alligator_EVER.mp3',
          info: 'This sound was recorded in August 2008 at Everglades National Park.<br><br>Note that a pig frog is also audible in the last quarter of this recording.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Alligator_EVER.png',
          credit: 'NPS'
        }
      },{
        title: 'Jet',
        category: 'Human-Caused',
        image: {
          file: 'JetOverAlcatraz_NPS_Lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Jet_YOSE_8_4_2005.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Jet_YOSE.png',
          credit: 'NPS'
        }
      },{
        title: 'Cannon Fire',
        category: 'Cultural/Historical',
        image: {
          file: 'FOMC_CannonFire_sm.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'cannon.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_cannon.png',
          credit: 'NPS'
        }
      },{
        title: 'Motorcycle',
        category: 'Human-Caused',
        image: {
          file: 'Motorcycle_Wikimedia_lg.jpg',
          credit: 'Wikimedia Commons'
        },
        sound: {
          file: 'Motorcycle_MORA_9_4_2006.MP3',
          info: 'This sound was recorded at Mount Rainer National Park in Washington.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Motorcycle_MORA_9_4_2006.png',
          credit: 'NPS'
        }
      },{
        title: 'Propeller',
        category: 'Human-Caused',
        image: {
          file: 'Propeller_Wikimedia_lg.jpg',
          credit: 'Wikimedia Commons'
        },
        sound: {
          file: 'Propeller_GOGA.MP3',
          info: 'This sound was recorded at Golden Gate National Recreation Area in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Propeller_GOGA.png',
          credit: 'NPS'
        }
      },{
        title: 'Reveille',
        category: 'Cultural/Historical',
        image: {
          file: 'Bugler_lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Reveille_FOLS.MP3',
          info: 'This sound was recorded at Fort Larned National Historic Site in Kansas.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Reveille_FOLS.png',
          credit: 'NPS'
        }
      },{
        title: 'Bear with Cubs',
        category: 'Mammals',
        image: {
          file: 'BearwithCubsinYellowstone.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Bear_with_Cubs_DENA_7_4_2006.MP3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Bear_with_cubs_DENA.png',
          credit: 'NPS'
        }
      },{
        title: 'Northern Flicker',
        category: 'Birds',
        image: {
          file: 'Northern_Flicker_lgcredit_USFWS.jpg',
          credit: 'USFWS/David Menke'
        },
        sound: {
          file: 'Northern_Flicker_YOSE_7_21_2006.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Northern_Flicker_YOSE_7_21_2006.png',
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
          file: 'PigFrog_EvergladesNP.MP3',
          info: 'This sound was recorded at Everglades National Park in Florida',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_EVER002_PigFrog.png',
          credit: 'NPS'
        }
      },{
        title: 'Uau (Hawaiian Petrel)',
        category: 'Birds',
        image: {
          file: 'Uau_HawaiianPetrel.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Uau_HawaiianPetrel_HALE.MP3',
          info: 'This sound was recorded at Haleakala National Park in Hawaii.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Uau_HawaiianPetrel_HALE.png',
          credit: 'NPS'
        }
      },{
        title: 'Common Poorwill',
        category: 'Birds',
        image: {
          file: 'CommonPoorwill_Wikimedia.jpg',
          credit: 'Wikimedia Commons'
        },
        sound: {
          file: 'Common_Poorwill_GRBA_9_5_2006.MP3',
          info: 'This sound was recorded at Great Basin National Park in Nevada.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_CommonPoorwill_GRBA.png',
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
          file: 'Avalanche_DENA.MP3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Avalanche_DENA.png',
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
          file: 'BighornSheepRammingHeads_ZION.MP3',
          info: 'This sound was recorded at Zion National Park in Utah.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'BighornSheep_RammingHeads_Specto.png',
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
          file: 'Ground_Squirrel_DENA_2004_8_15.MP3',
          info: 'This sound was recorded in Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Ground_squirrel_DENA.png',
          credit: 'NPS'
        }
      },{
        title: 'Jamboree',
        category: 'Cultural/Historical',
        image: {
          file: 'FifeandDrum.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Jamboree_MIMA_10_03_06.MP3',
          info: 'This sound was recorded at Minute Man National Historical Park in Massachusetts.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Jamboree_MIMA_10_03_06.png',
          credit: 'NPS'
        }
      },{
        title: 'Western Gull',
        category: 'Birds',
        image: {
          file: 'WesternGull_NPS_WillElder.jpg',
          credit: 'NPS/Will Elder'
        },
        sound: {
          file: 'WesternGull_GOGA_02_01_2008.MP3',
          info: 'This sound was recorded at Golden Gate National Recreation Area in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_WesternGull_GOGA_02_01_2008.png',
          credit: 'NPS'
        }
      },{
        title: 'Grasshopper',
        category: 'Insects',
        image: {
          file: 'LongHornedGrasshopper_NPSBlakeTrester.jpg',
          credit: 'NPS/Blake Trester'
        },
        sound: {
          file: 'Grasshopper_YOSE_9_15_2005.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Grashopper_YOSE.png',
          credit: 'NPS'
        }
      },{
        title: 'Steller\'s Jay',
        category: 'Birds',
        image: {
          file: 'StellersJay_NPS.jpg',
          credit: 'NPS/Sally King'
        },
        sound: {
          file: 'Steller_Jay.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Steller_Jay.png',
          credit: 'NPS'
        }
      },{
        title: 'Alder Flycatcher',
        category: 'Birds',
        image: {
          file: 'AlderFlycatcher.jpg',
          credit: 'Credit: USGS/Mercedes Foster'
        },
        sound: {
          file: 'ALDER_FLYCATCHERS_YukonRiver.MP3',
          info: 'This sound was recorded at Yukon-Charley River National Preserve in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_AlderFlycatcher_YukonRiver.png',
          credit: 'NPS'
        }
      },{
        title: 'Omaha Indian Song Contest',
        category: 'Cultural/Historical',
        image: {
          file: 'OmahaMusic_TaiPiahSingers.jpg',
          credit: 'Library of Congress, American Folklife Ctr'
        },
        sound: {
          file: 'Omaha_Indian_Contest_Song_LOC.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Omaha_Indian_Contest_Song_LOC.png',
          credit: 'NPS'
        }
      },{
        title: 'Snowmobile',
        category: 'Human-Caused',
        image: {
          file: 'snowmobile_NPS_lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Snowmobile.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Snowmobile.png',
          credit: 'NPS'
        }
      },{
        title: 'Chainsaw',
        category: 'Human-Caused',
        image: {
          file: 'Chainsaw_Wikimedia_lg.JPG',
          credit: 'Wikimedia Commons'
        },
        sound: {
          file: 'Chainsaw_SEKI_8_30_2006.MP3',
          info: 'This sound was recorded at Sequoia and Kings Canyon National Parks in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Chainsaw_SEKI.png',
          credit: 'NPS'
        }
      },{
        title: 'Rain',
        category: 'Meteorological',
        image: {
          file: 'Rainfall_Wikimedia_lg.jpg',
          credit: 'Wikimedia Commons'
        },
        sound: {
          file: 'Rain_DEPO_9_26_2005.MP3',
          info: 'This sound was recorded at Devils Postpile National Monument in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Rain_DEPO_9_26_2005.png',
          credit: 'NPS'
        }
      },{
        title: 'Sandhill Crane',
        category: 'Birds',
        image: {
          file: 'SandhillCrane_USFWS.jpg',
          credit: 'USFWS'
        },
        sound: {
          file: 'Sandhill_Cranes_DENA_2004_9_14.MP3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Sandhill_Cranes_DENA_2004_9_14.png',
          credit: 'NPS'
        }
      },{
        title: 'Yellow-rumped Warbler',
        category: 'Birds',
        image: {
          file: 'Yellow_rumped_Warbler_credit_FWS.jpg',
          credit: 'USFWS/David Menke'
        },
        sound: {
          file: 'Yellow_Rumped_Warbler_GRTE_2005_6_30.MP3',
          info: 'This sound was recorded at Grand Teton National Park in Wyoming.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Yellow_Rumped_Warbler_GRTE_2005_6_30.png',
          credit: 'NPS'
        }
      },{
        title: 'Battle Sounds',
        category: 'Cultural/Historical',
        image: {
          file: 'Battle_ShilohNMP.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'battlesounds.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_battlesounds.png',
          credit: 'NPS'
        }
      },{
        title: 'Chickens',
        category: 'Cultural/Historical',
        image: {
          file: 'chicken.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Chickens_MIMA_10_05_2006.MP3',
          info: 'This sound was recorded at Minute Man National Historical Park in Massachusetts.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Chickens_MIMA.png',
          credit: 'NPS'
        }
      },{
        title: 'Coyote',
        category: 'Mammals',
        image: {
          file: 'Coyote.jpg',
          credit: 'NPS/Bryan Harry'
        },
        sound: {
          file: 'Coyotes_MOJA_08_11_2005.MP3',
          info: 'This sound was recorded at Mojave National Preserve in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Coyotes_MOJA.png',
          credit: 'NPS'
        }
      },{
        title: 'Omaha Indian Buffalo Dance',
        category: 'Cultural/Historical',
        image: {
          file: 'OmahaIndianDance_Wikimedia.jpg',
          credit: 'Library of Congress, American Folklife Ctr'
        },
        sound: {
          file: 'Omaha_Indian_Buffalo_Dance_LOC.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Omaha_Indian_Buffalo_Dance_LOC.png',
          credit: 'NPS'
        }
      },{
        title: 'White-crowned Sparrow',
        category: 'Birds',
        image: {
          file: 'White_Crowned_Sparrow_credit_FWS.jpg',
          credit: 'USFWS/David Menke'
        },
        sound: {
          file: 'White_crowned_Sparrow_DENA.MP3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_White_crowned_Sparrow_DENA.png',
          credit: 'NPS'
        }
      },{
        title: 'American Robin',
        category: 'Birds',
        image: {
          file: 'American_Robin_credit_FWS_David_Menke.jpg',
          credit: 'USFWS/David Menke'
        },
        sound: {
          file: 'American_Robin_YELL_2005_4_19.MP3',
          info: 'This sound was recorded at Yellowstone National Park in Wyoming.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_AmericanRobin_YELL_2005_4_19.png',
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
          file: 'Wolf_DENA_7_25_2006.MP3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Wolf_DENA_7_25_2006.png',
          credit: 'NPS'
        }
      },{
        title: 'Musket Fire',
        category: 'Cultural/Historical',
        image: {
          file: 'FortMcHenry_MusketFire_lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'MusketFire_MIMA.MP3',
          info: 'This sound was recorded at Minute Man National Historical Park in Massachusetts.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_MusketFire_MIMA.png',
          credit: 'NPS'
        }
      },{
        title: 'Ptarmigan',
        category: 'Birds',
        image: {
          file: 'Ptarmigan_credit_FWS.jpg',
          credit: 'USFWS/Steve Ebbert'
        },
        sound: {
          file: 'Ptarmagin_DENA_5_19_2006.MP3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Ptarmagin_DENA_5_19_2006.png',
          credit: 'NPS'
        }
      },{
        title: 'Bee',
        category: 'Insects',
        image: {
          file: 'MetallicSweatBee_NPSPaulGJohnson.jpg',
          credit: 'NPS/Paul G. Johnson'
        },
        sound: {
          file: 'Bee_YOSE_6_23_2006.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Bee_YOSE.png',
          credit: 'NPS'
        }
      },{
        title: 'Canada Geese',
        category: 'Birds',
        image: {
          file: 'Canada_Geese_credit_FWS_lg.jpg',
          credit: 'USFWS/Tim Bowman'
        },
        sound: {
          file: 'Canada_Goose.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_CanadaGoose.png',
          credit: 'NPS'
        }
      },{
        title: 'Anhinga',
        category: 'Birds',
        image: {
          file: 'anhinga_lg.jpg',
          credit: 'University of Kentucky/Dr. Thomas Barnes'
        },
        sound: {
          file: 'Anhinga_EVER_04_20_2008.MP3',
          info: 'This sound was recorded at Everglades National Park in Florida.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Anhinga_EVER.png',
          credit: 'NPS'
        }
      },{
        title: 'Boat',
        category: 'Human-Caused',
        image: {
          file: 'Motorboat_NPS_JSchmidt_lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Boat_NOCA_8_8_2007.MP3',
          info: 'This sound was recorded at North Cascades National Park in Washington.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Boat_NOCA.png',
          credit: 'NPS'
        }
      },{
        title: 'Elk',
        category: 'Mammals',
        image: {
          file: 'Elk_Redwood_National_and_State_Parks_credit_NPS.JPG',
          credit: 'NPS'
        },
        sound: {
          file: 'Elk_Bugling_GRSA_09_29_08.MP3',
          info: 'This sound was recorded at Great Sand Dunes National Park and Preserve in Colorado.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Elk_Bugling_GRSA.png',
          credit: 'NPS'
        }
      },{
        title: 'Townsend big-eared bat',
        category: 'Mammals',
        image: {
          file: 'townsendbigearedbat.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'TownsendBat.MP3',
          info: 'This sound was recorded at Great Basin National Park by Bryan Hamilton',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_TownsendBigEaredBat.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Bald Eagle',
        category: 'Birds',
        image: {
          file: 'Bald_Eagle.jpg',
          credit: 'USFWS/David Menke'
        },
        sound: {
          file: 'Bald_Eagle_YELL.MP3',
          info: 'This sound was recorded at Yellowstone National Park in Wyoming.<br>Note that a Common Raven can also be heard.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_BaldEagle_YELL.png',
          credit: 'NPS'
        }
      },{
        title: 'Clark\'s Nutcracker',
        category: 'Birds',
        image: {
          file: 'ClarksNutcracker_credit_FWS_DaveMenkeLG.jpg',
          credit: 'USFWS/David Menke'
        },
        sound: {
          file: 'Clarks_Nutcracker_YOSE_9_18_2005.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Clarks_Nutcracker_YOSE.png',
          credit: 'NPS'
        }
      },{
        title: 'Hermit Thrush',
        category: 'Birds',
        image: {
          file: 'Hermit_Thrush_credit_FWS_lg.png',
          credit: 'USFWS/Lee Karney'
        },
        sound: {
          file: 'Hermit_Thrush_YOSE_7_17_2006.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Hermit_Thrush_YOSE_7_17_2006.png',
          credit: 'NPS'
        }
      },{
        title: 'Red-breasted Nuthatch',
        category: 'Birds',
        image: {
          file: 'RedBreastedNuthatch_NPS.jpg',
          credit: 'NPS/Sally King'
        },
        sound: {
          file: 'Red_breasted_Nuthatch_YOSE_7_8_2006.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Red_breasted_Nuthatch_YOSE_7_8_2006.png',
          credit: 'NPS'
        }
      },{
        title: 'Harmonica',
        category: 'Cultural/Historical',
        image: {
          file: 'Harmonica_Wikimedia_lg.jpg',
          credit: 'Wikimedia Commons'
        },
        sound: {
          file: 'Harmonica_YOSE_6_24_2006.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Harmonica_YOSE_6_24_2006.png',
          credit: 'NPS'
        }
      },{
        title: 'Menor\'s Ferry',
        category: 'Cultural/Historical',
        image: {
          file: 'MenorsFerry_2009_a.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'MenorsFerry.MP3',
          info: 'This sound was recorded in Grand Teton National Park in Wyoming.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'menor_ferry.png',
          credit: 'NPS'
        }
      },{
        title: 'Native American Music',
        category: 'Cultural/Historical',
        image: {
          file: 'drumming.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Traditional_Native_American_Music.MP3',
          info: 'This sound was recorded at Nez Perce National Historical Park in ID,MT,OR,WA.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Traditional_Native_American_Music.png',
          credit: 'NPS'
        }
      },{
        title: 'Sensation Jazz',
        category: 'Cultural/Historical',
        image: {
          file: 'JAZZ_doreen.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Sensation_Jazz.MP3',
          info: 'This sound was recorded at Edison National Historic Site in New Jersey.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Sensation_Jazz.png',
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
          file: 'GulfToadFish_EVER_4_20_2008.MP3',
          info: 'This sound was recorded at Everglades National Park in Florida.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_GulfToadFish_EVER.png',
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
          file: 'Rockfall_NOCA010_20090815_023035.MP3',
          info: 'This sound was recorded at North Cascades National Park in Washington.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Rockfall_NOCA010_20090815_023035.png',
          credit: 'NPS'
        }
      },{
        title: 'Helicopter',
        category: 'Human-Caused',
        image: {
          file: 'HellicopterOverHaleakala_NPS_lg.jpg',
          credit: 'NPS'
        },
        sound: {
          file: 'Helicopter_YOSE_8_6_2005.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Helicopter_YOSE_8_6_2005.png',
          credit: 'NPS'
        }
      },{
        title: 'Rotary Snowplow',
        category: 'Human-Caused',
        image: {
          file: 'Snowplow_NPS_JimPeaco_lg.jpg',
          credit: 'NPS/Jim Peaco'
        },
        sound: {
          file: 'RotarySnowPlow.MP3',
          info: '',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_RotarySnowPlow.png',
          credit: 'NPS'
        }
      },{
        title: 'Stream',
        category: 'Hydrological',
        image: {
          file: 'Stream_JohnHeidecker_lg.jpg',
          credit: 'John Heidecker'
        },
        sound: {
          file: 'Stream_MUWO_.MP3',
          info: 'This sound was recorded at Muir Woods National Monument in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Stream_MUWO.png',
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
          file: 'Coyotes_Chase_GRSA.MP3',
          info: 'Great Sand Dunes National Park and Preserve<br>September 2008',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'CoyoteChase_GRSA.png',
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
          file: 'Killer_Whale_GLBA_November2002.MP3',
          info: 'This sound was recorded at Glacier Bay National Park and Preserve in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Killer_Whale_GLBA.png',
          credit: 'NPS'
        }
      },{
        title: 'Squirrel',
        category: 'Mammals',
        image: {
          file: 'RedSquirrel_NPS_CJudson_lg.jpg',
          credit: 'NPS/C. Judson'
        },
        sound: {
          file: 'Squirrel_YELL.MP3',
          info: 'This sound was recorded at Yellowstone National Park in Wyoming.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Squirrel_YELL.png',
          credit: 'NPS'
        }
      }
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
        pack: sw1Pack
      },
      'NPS': {
        shortTitle: 'NPS',
        title: 'NPS',
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
      var remainingSpectrograms = angular.copy(pack);
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
