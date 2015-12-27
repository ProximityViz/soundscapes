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
    // Service logic
    // ...

    console.log('loaded factory');

    var npsPack = [
      {
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
          file: 'Spectro_CouchsSpadefootToad.jpg',
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
          file: 'Spectro_EVER002_greentreefrog.jpg',
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
          file: 'Spectro_EVER002_PigFrog.jpg',
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
          file: 'Spectro_AlderFlycatcher_YukonRiver.jpg',
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
          file: 'Spectro_AmericanRobin_YELL_2005_4_19.jpg',
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
          file: 'Spectro_Anhinga_EVER.jpg',
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
          file: 'Spectro_BaldEagle_YELL.jpg',
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
          file: 'Spectro_Hummingbird_GRTE_2005_6_9.jpg',
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
          file: 'Spectro_CanadaGoose.jpg',
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
          file: 'Spectro_Clarks_Nutcracker_YOSE.jpg',
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
          file: 'Spectro_CommonPoorwill_GRBA.jpg',
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
          file: 'Spectro_Common_Raven_GRTE.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Hermit Thrush',
        category: 'Birds',
        image: {
          file: 'Hermit_Thrush_credit_FWS_lg.jpg',
          credit: 'USFWS/Lee Karney'
        },
        sound: {
          file: 'Hermit_Thrush_YOSE_7_17_2006.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Hermit_Thrush_YOSE_7_17_2006.jpg',
          credit: 'NPS'
        }
      },{
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
          file: 'Spectro_KILLDEER.jpg',
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
          file: 'Spectro_Northern_Flicker_YOSE_7_21_2006.jpg',
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
          file: 'Spectro_Osprey_GRTE_2005_5_29.jpg',
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
          file: 'Spectro_Ptarmagin_DENA_5_19_2006.jpg',
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
          file: 'Spectro_Red_breasted_Nuthatch_YOSE_7_8_2006.jpg',
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
          file: 'Spectro_Sandhill_Cranes_DENA_2004_9_14.jpg',
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
          file: 'Spectro_Spotted_Owl_YOSE_7_14_2006.jpg',
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
          file: 'Spectro_Steller_Jay.jpg',
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
          file: 'Uau_HawaiianPetrel_HALE.jpg',
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
          file: 'Spectro_WesternGull_GOGA_02_01_2008.jpg',
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
          file: 'Spectro_White_crowned_Sparrow_DENA.jpg',
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
          file: 'Spectro_Yellow_Rumped_Warbler_GRTE_2005_6_30.jpg',
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
          file: 'Spectro_battlesounds.jpg',
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
          file: 'Spectro_cannon.jpg',
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
          file: 'Spectro_Chickens_MIMA.jpg',
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
          file: 'Spectro_Harmonica_YOSE_6_24_2006.jpg',
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
          file: 'Spectro_Jamboree_MIMA_10_03_06.jpg',
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
          file: 'menor_ferry.jpg',
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
          file: 'Spectro_MusketFire_MIMA.jpg',
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
          file: 'Spectro_Traditional_Native_American_Music.jpg',
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
          file: 'Spectro_Omaha_Indian_Buffalo_Dance_LOC.jpg',
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
          file: 'Spectro_Omaha_Indian_Contest_Song_LOC.jpg',
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
          file: 'Spectro_Reveille_FOLS.jpg',
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
          file: 'Spectro_Sensation_Jazz.jpg',
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
          file: 'Spectro_GulfToadFish_EVER.jpg',
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
          file: 'Spectro_Avalanche_DENA.jpg',
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
          file: 'Spectro_Boat_NOCA.jpg',
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
          file: 'Car_Alarm_KEFJ_Sound.jpg',
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
          file: 'Spectro_Chainsaw_SEKI.jpg',
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
          file: 'Spectro_Helicopter_YOSE_8_6_2005.jpg',
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
          file: 'Spectro_Jet_YOSE.jpg',
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
          file: 'Spectro_Motorcycle_MORA_9_4_2006.jpg',
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
          file: 'Spectro_Propeller_GOGA.jpg',
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
          file: 'Spectro_RotarySnowPlow.jpg',
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
          file: 'Spectro_Siren_GRTE_2004_6_7.jpg',
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
          file: 'Spectro_Snowmobile.jpg',
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
          file: 'Spectro_Ocean_Olympic_NP.jpg',
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
          file: 'Spectro_Stream_MUWO.jpg',
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
          file: 'Spectro_Bee_YOSE.jpg',
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
          file: 'Spectro_Crickets_MOJA.jpg',
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
          file: 'Spectro_Grashopper_YOSE.jpg',
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
          file: 'Spectro_Bear_with_cubs_DENA.jpg',
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
          file: 'BighornSheep_RammingHeads_Specto.jpg',
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
          file: 'Spectro_Bison_YELL.jpg',
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
          file: 'Spectro_Coyotes_MOJA.jpg',
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
          file: 'CoyoteChase_GRSA.jpg',
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
          file: 'Spectro_Elk_Bugling_GRSA.jpg',
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
          file: 'Spectro_Ground_squirrel_DENA.jpg',
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
          file: 'Spectro_Humpback_GLBA.jpg',
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
          file: 'Spectro_Killer_Whale_GLBA.jpg',
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
          file: 'Spectro_Spotted_Bat_YOSE.jpg',
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
          file: 'Spectro_Squirrel_YELL.jpg',
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
          file: 'Spectro_Wolf_DENA_7_25_2006.jpg',
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
          file: 'Spectro_Rain_DEPO_9_26_2005.jpg',
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
          file: 'Thunder_Sound_Pic.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Reptiles',
        category: 'Mammals',
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
          file: 'Spectro_Alligator_EVER.jpg',
          credit: 'NPS'
        }
      }
    ];

    var packs = [
      {
        title: 'NPS',
        pack: npsPack
      }
    ];

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
    function getExplore(packId) {
      var pack = packs[packId];
      var explorePack = angular.copy(pack);
      var categories = getCategories(pack.pack);
      categories.sort();
      explorePack.pack = [];
      // add cards for each category
      for (var category in categories) {
        explorePack.pack.push({'category': categories[category]});
        explorePack.pack[category].cards = pack.pack.filter(function (value, index, array) {
          return (value.category === categories[category]);
        });
        // inside each category, sort by title
        sortByKey(explorePack.pack[category].cards, 'title');
      };
      return explorePack;
    }

    function getSound(id) {
      return npsPack[id];
    }

    function getQuiz(packId, sound) {
      console.log(packId);
      console.log(sound);
      var pack = packs[packId].pack;
      var quiz = {};
      quiz.title = pack[sound].title;
      quiz.image = pack[sound].image;
      quiz.sound = pack[sound].sound;
      quiz.sound.file = "../resources/" + quiz.sound.file;
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
      }
      quiz.remainingSpectrograms = remainingSpectrograms;
      quiz.packTitle = packs[packId].title;
      quiz.packSize = pack.length;
      return quiz;
    }

    // Public API here
    return {
      getSound: getSound,
      getQuiz: getQuiz,
      getExplore: getExplore
    };
  });
