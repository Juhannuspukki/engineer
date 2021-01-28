// This file contains the data to reverse engineer all the blueprints in the game

const itemIdentifiers = [
    {
        "id": 11000020002,
        "name": "MK1 Small Rifled Railgun"
    },
    {
        "id": 11000020004,
        "name": "MK3 Small Rifled Railgun"
    },
    {
        "id": 11000020006,
        "name": "MK5 Small Rifled Railgun"
    },
    {
        "id": 11000020008,
        "name": "MK7 Small Rifled Railgun"
    },
    {
        "id": 11000020010,
        "name": "MK9 Small Rifled Railgun"
    },
    {
        "id": 11000020012,
        "name": "'Musket' Small Rifled Railgun"
    },
    {
        "id": 11000020013,
        "name": "Caldari Navy Small Rifled Railgun"
    },
    {
        "id": 11000020014,
        "name": "Federation Navy Small Rifled Railgun"
    },
    {
        "id": 11000020017,
        "name": "Dread Guristas Small Rifled Railgun"
    },
    {
        "id": 11000020018,
        "name": "Shadow Serpentis Small Rifled Railgun"
    },
    {
        "id": 11000020021,
        "name": "'Quafe' Small Rifled Railgun"
    },
    {
        "id": 11000020024,
        "name": "Coreli C-Type Small Rifled Railgun"
    },
    {
        "id": 11000120006,
        "name": "MK5 Medium Rifled Railgun"
    },
    {
        "id": 11000120008,
        "name": "MK7 Medium Rifled Railgun"
    },
    {
        "id": 11000120010,
        "name": "MK9 Medium Rifled Railgun"
    },
    {
        "id": 11000120012,
        "name": "'Flintlock' Medium Rifled Railgun"
    },
    {
        "id": 11000120013,
        "name": "Caldari Navy Medium Rifled Railgun"
    },
    {
        "id": 11000120014,
        "name": "Federation Navy Medium Rifled Railgun"
    },
    {
        "id": 11000120017,
        "name": "Dread Guristas Medium Rifled Railgun"
    },
    {
        "id": 11000120018,
        "name": "Shadow Serpentis Medium Rifled Railgun"
    },
    {
        "id": 11000120021,
        "name": "'Magnate' Medium Rifled Railgun"
    },
    {
        "id": 11000120024,
        "name": "Corelum C-Type Medium Rifled Railgun"
    },
    {
        "id": 11000220008,
        "name": "MK7 Large Rifled Railgun"
    },
    {
        "id": 11000220010,
        "name": "MK9 Large Rifled Railgun"
    },
    {
        "id": 11000220012,
        "name": "'Popper' Large Rifled Railgun"
    },
    {
        "id": 11000220013,
        "name": "Caldari Navy Large Rifled Railgun"
    },
    {
        "id": 11000220014,
        "name": "Federation Navy Large Rifled Railgun"
    },
    {
        "id": 11000220017,
        "name": "Dread Guristas Large Rifled Railgun"
    },
    {
        "id": 11000220018,
        "name": "Shadow Serpentis Large Rifled Railgun"
    },
    {
        "id": 11000220021,
        "name": "'Poison' Large Rifled Railgun"
    },
    {
        "id": 11000220024,
        "name": "Core C-Type Large Rifled Railgun"
    },
    {
        "id": 11000520001,
        "name": "Civilian Small Snubnosed Railgun"
    },
    {
        "id": 11000520002,
        "name": "MK1 Small Snubnosed Railgun"
    },
    {
        "id": 11000520004,
        "name": "MK3 Small Snubnosed Railgun"
    },
    {
        "id": 11000520006,
        "name": "MK5 Small Snubnosed Railgun"
    },
    {
        "id": 11000520008,
        "name": "MK7 Small Snubnosed Railgun"
    },
    {
        "id": 11000520010,
        "name": "MK9 Small Snubnosed Railgun"
    },
    {
        "id": 11000520012,
        "name": "'Dealer' Small Snubnosed Railgun"
    },
    {
        "id": 11000520013,
        "name": "Federation Navy Small Snubnosed Railgun"
    },
    {
        "id": 11000520021,
        "name": "'Quafe' Small Snubnosed Railgun"
    },
    {
        "id": 11000520024,
        "name": "Coreli C-Type Small Snubnosed Railgun"
    },
    {
        "id": 11000620001,
        "name": "Civilian Medium Snubnosed Railgun"
    },
    {
        "id": 11000620006,
        "name": "MK5 Medium Snubnosed Railgun"
    },
    {
        "id": 11000620008,
        "name": "MK7 Medium Snubnosed Railgun"
    },
    {
        "id": 11000620010,
        "name": "MK9 Medium Snubnosed Railgun"
    },
    {
        "id": 11000620012,
        "name": "'Hustler' Medium Snubnosed Railgun"
    },
    {
        "id": 11000620013,
        "name": "Federation Navy Medium Snubnosed Railgun"
    },
    {
        "id": 11000620021,
        "name": "'Magnate' Medium Snubnosed Railgun"
    },
    {
        "id": 11000620024,
        "name": "Corelum C-Type Medium Snubnosed Railgun"
    },
    {
        "id": 11000720008,
        "name": "MK7 Large Snubnosed Railgun"
    },
    {
        "id": 11000720010,
        "name": "MK9 Large Snubnosed Railgun"
    },
    {
        "id": 11000720012,
        "name": "'Swindler' Large Snubnosed Railgun"
    },
    {
        "id": 11000720013,
        "name": "Federation Navy Large Snubnosed Railgun"
    },
    {
        "id": 11000720017,
        "name": "Shadow Serpentis Large Snubnosed Railgun"
    },
    {
        "id": 11000720021,
        "name": "'Poison' Large Snubnosed Railgun"
    },
    {
        "id": 11000720024,
        "name": "Core C-Type Large Snubnosed Railgun"
    },
    {
        "id": 11002110002,
        "name": "MK1 Small Beam Laser"
    },
    {
        "id": 11002110004,
        "name": "MK3 Small Beam Laser"
    },
    {
        "id": 11002110006,
        "name": "MK5 Small Beam Laser"
    },
    {
        "id": 11002110008,
        "name": "MK7 Small Beam Laser"
    },
    {
        "id": 11002110010,
        "name": "MK9 Small Beam Laser"
    },
    {
        "id": 11002110012,
        "name": "'Mace' Small Beam Laser"
    },
    {
        "id": 11002110013,
        "name": "Imperial Navy Small Beam Laser"
    },
    {
        "id": 11002110017,
        "name": "True Sansha Small Beam Laser"
    },
    {
        "id": 11002110021,
        "name": "'Rebel' Small Beam Laser"
    },
    {
        "id": 11002110024,
        "name": "Centii C-Type Small Beam Laser"
    },
    {
        "id": 11002110025,
        "name": "Corpii C-Type Small Beam Laser"
    },
    {
        "id": 11002220006,
        "name": "MK5 Medium Beam Laser"
    },
    {
        "id": 11002220008,
        "name": "MK7 Medium Beam Laser"
    },
    {
        "id": 11002220010,
        "name": "MK9 Medium Beam Laser"
    },
    {
        "id": 11002220012,
        "name": "'Crossbow' Medium Beam Laser"
    },
    {
        "id": 11002220013,
        "name": "Imperial Navy Medium Beam Laser"
    },
    {
        "id": 11002220017,
        "name": "True Sansha Medium Beam Laser"
    },
    {
        "id": 11002220021,
        "name": "'Ritual' Medium Beam Laser"
    },
    {
        "id": 11002220024,
        "name": "Centum C-Type Medium Beam Laser"
    },
    {
        "id": 11002220025,
        "name": "Corpum C-Type Medium Beam Laser"
    },
    {
        "id": 11002310008,
        "name": "MK7 Large Beam Laser"
    },
    {
        "id": 11002310010,
        "name": "MK9 Large Beam Laser"
    },
    {
        "id": 11002310012,
        "name": "'Catapult' Large Beam Laser"
    },
    {
        "id": 11002310013,
        "name": "Imperial Navy Large Beam Laser"
    },
    {
        "id": 11002310017,
        "name": "True Sansha Large Beam Laser"
    },
    {
        "id": 11002310021,
        "name": "'Ruin' Large Beam Laser"
    },
    {
        "id": 11002310024,
        "name": "Centus C-Type Large Beam Laser"
    },
    {
        "id": 11002310025,
        "name": "Corpus C-Type Large Beam Laser"
    },
    {
        "id": 11002510001,
        "name": "Civilian Small Pulse Laser"
    },
    {
        "id": 11002510002,
        "name": "MK1 Small Pulse Laser"
    },
    {
        "id": 11002510004,
        "name": "MK3 Small Pulse Laser"
    },
    {
        "id": 11002510006,
        "name": "MK5 Small Pulse Laser"
    },
    {
        "id": 11002510008,
        "name": "MK7 Small Pulse Laser"
    },
    {
        "id": 11002510010,
        "name": "MK9 Small Pulse Laser"
    },
    {
        "id": 11002510012,
        "name": "'Longbow' Small Pulse Laser"
    },
    {
        "id": 11002510013,
        "name": "Imperial Navy Small Pulse Laser"
    },
    {
        "id": 11002510017,
        "name": "True Sansha Small Pulse Laser"
    },
    {
        "id": 11002510018,
        "name": "Dark Blood Small Pulse Laser"
    },
    {
        "id": 11002510021,
        "name": "'Rebel' Small Pulse Laser"
    },
    {
        "id": 11002510024,
        "name": "Centii C-Type Small Pulse Laser"
    },
    {
        "id": 11002510025,
        "name": "Corpii C-Type Small Pulse Laser"
    },
    {
        "id": 11002600001,
        "name": "Civilian Medium Pulse Laser"
    },
    {
        "id": 11002600006,
        "name": "MK5 Medium Pulse Laser"
    },
    {
        "id": 11002600008,
        "name": "MK7 Medium Pulse Laser"
    },
    {
        "id": 11002600010,
        "name": "MK9 Medium Pulse Laser"
    },
    {
        "id": 11002600012,
        "name": "'Joust' Medium Pulse Laser"
    },
    {
        "id": 11002600013,
        "name": "Imperial Navy Medium Pulse Laser"
    },
    {
        "id": 11002600017,
        "name": "True Sansha Medium Pulse Laser"
    },
    {
        "id": 11002600018,
        "name": "Dark Blood Medium Pulse Laser"
    },
    {
        "id": 11002600021,
        "name": "'Ritual' Medium Pulse Laser"
    },
    {
        "id": 11002600024,
        "name": "Centum C-Type Medium Pulse Laser"
    },
    {
        "id": 11002600025,
        "name": "Corpum C-Type Medium Pulse Laser"
    },
    {
        "id": 11002710008,
        "name": "MK7 Large Pulse Laser"
    },
    {
        "id": 11002710010,
        "name": "MK9 Large Pulse Laser"
    },
    {
        "id": 11002710012,
        "name": "'Halberd' Large Pulse Laser"
    },
    {
        "id": 11002710013,
        "name": "Imperial Navy Large Pulse Laser"
    },
    {
        "id": 11002710021,
        "name": "'Ruin' Large Pulse Laser"
    },
    {
        "id": 11002710024,
        "name": "Centus C-Type Large Pulse Laser"
    },
    {
        "id": 11002710025,
        "name": "Corpus C-Type Large Pulse Laser"
    },
    {
        "id": 11004120001,
        "name": "Civilian Small Autocannon"
    },
    {
        "id": 11004120002,
        "name": "MK1 Small Autocannon"
    },
    {
        "id": 11004120004,
        "name": "MK3 Small Autocannon"
    },
    {
        "id": 11004120006,
        "name": "MK5 Small Autocannon"
    },
    {
        "id": 11004120008,
        "name": "MK7 Small Autocannon"
    },
    {
        "id": 11004120010,
        "name": "MK9 Small Autocannon"
    },
    {
        "id": 11004120012,
        "name": "'Jolt' Small Autocannon"
    },
    {
        "id": 11004120013,
        "name": "Republic Fleet Small Autocannon"
    },
    {
        "id": 11004120017,
        "name": "Domination Small Autocannon"
    },
    {
        "id": 11004120021,
        "name": "'Criminal' Small Autocannon"
    },
    {
        "id": 11004120024,
        "name": "Gistii C-Type Small Autocannon"
    },
    {
        "id": 11004220001,
        "name": "Civilian Medium Autocannon"
    },
    {
        "id": 11004220006,
        "name": "MK5 Medium Autocannon"
    },
    {
        "id": 11004220008,
        "name": "MK7 Medium Autocannon"
    },
    {
        "id": 11004220010,
        "name": "MK9 Medium Autocannon"
    },
    {
        "id": 11004220012,
        "name": "'Jolt' Medium Autocannon"
    },
    {
        "id": 11004220013,
        "name": "Republic Fleet Medium Autocannon"
    },
    {
        "id": 11004220017,
        "name": "Domination Medium Autocannon"
    },
    {
        "id": 11004220021,
        "name": "'Free' Medium Autocannon"
    },
    {
        "id": 11004220024,
        "name": "Gistum C-Type Medium Autocannon"
    },
    {
        "id": 11004320008,
        "name": "MK7 Large Autocannon"
    },
    {
        "id": 11004320010,
        "name": "MK9 Large Autocannon"
    },
    {
        "id": 11004320012,
        "name": "'Jolt' Large Autocannon"
    },
    {
        "id": 11004320013,
        "name": "Republic Fleet Large Autocannon"
    },
    {
        "id": 11004320021,
        "name": "'Elder' Large Autocannon"
    },
    {
        "id": 11004320024,
        "name": "Gist C-Type Large Autocannon"
    },
    {
        "id": 11004510002,
        "name": "MK1 Small Strike Cannon"
    },
    {
        "id": 11004510004,
        "name": "MK3 Small Strike Cannon"
    },
    {
        "id": 11004510006,
        "name": "MK5 Small Strike Cannon"
    },
    {
        "id": 11004510008,
        "name": "MK7 Small Strike Cannon"
    },
    {
        "id": 11004510010,
        "name": "MK9 Small Strike Cannon"
    },
    {
        "id": 11004510012,
        "name": "'Jolt' Small Strike Cannon"
    },
    {
        "id": 11004510013,
        "name": "Republic Fleet Small Strike Cannon"
    },
    {
        "id": 11004510017,
        "name": "Domination Small Strike Cannon"
    },
    {
        "id": 11004510021,
        "name": "'Criminal' Small Strike Cannon"
    },
    {
        "id": 11004510024,
        "name": "Gistii C-Type Small Strike Cannon"
    },
    {
        "id": 11004610006,
        "name": "MK5 Medium Strike Cannon"
    },
    {
        "id": 11004610008,
        "name": "MK7 Medium Strike Cannon"
    },
    {
        "id": 11004610010,
        "name": "MK9 Medium Strike Cannon"
    },
    {
        "id": 11004610012,
        "name": "'Jolt' Medium Strike Cannon"
    },
    {
        "id": 11004610013,
        "name": "Republic Fleet Medium Strike Cannon"
    },
    {
        "id": 11004610017,
        "name": "Domination Medium Strike Cannon"
    },
    {
        "id": 11004610021,
        "name": "'Free' Medium Strike Cannon"
    },
    {
        "id": 11004610024,
        "name": "Gistum C-Type Medium Strike Cannon"
    },
    {
        "id": 11004710008,
        "name": "MK7 Large Strike Cannon"
    },
    {
        "id": 11004710010,
        "name": "MK9 Large Strike Cannon"
    },
    {
        "id": 11004710012,
        "name": "'Jolt' Large Strike Cannon"
    },
    {
        "id": 11004710013,
        "name": "Republic Fleet Large Strike Cannon"
    },
    {
        "id": 11004710017,
        "name": "Domination Large Strike Cannon"
    },
    {
        "id": 11004710021,
        "name": "'Elder' Large Strike Cannon"
    },
    {
        "id": 11004710024,
        "name": "Gist C-Type Large Strike Cannon"
    },
    {
        "id": 11005000012,
        "name": "'The Returned' Small Jetstream Decomposer"
    },
    {
        "id": 11005000013,
        "name": "Yan-Jung Small Jetstream Decomposer"
    },
    {
        "id": 11005000017,
        "name": "'The Departed' Small Jetstream Decomposer"
    },
    {
        "id": 11005000021,
        "name": "'The Sacrificed' Small Jetstream Decomposer"
    },
    {
        "id": 11005000024,
        "name": "'Wei' C Small Jetstream Decomposer"
    },
    {
        "id": 11005050012,
        "name": "'The Returned' Medium Jetstream Decomposer"
    },
    {
        "id": 11005050013,
        "name": "Yan-Jung Medium Jetstream Decomposer"
    },
    {
        "id": 11005050017,
        "name": "'The Departed' Medium Jetstream Decomposer"
    },
    {
        "id": 11005050021,
        "name": "'The Sacrificed' Medium Jetstream Decomposer"
    },
    {
        "id": 11005050024,
        "name": "'Cheng' C Medium Jetstream Decomposer"
    },
    {
        "id": 11006100004,
        "name": "MK3 Miner"
    },
    {
        "id": 11006100006,
        "name": "MK5 Miner"
    },
    {
        "id": 11006100008,
        "name": "MK7 Miner"
    },
    {
        "id": 11006100010,
        "name": "MK9 Miner"
    },
    {
        "id": 11006100012,
        "name": "Single Diode Miner"
    },
    {
        "id": 11006100013,
        "name": "Gallente Miner"
    },
    {
        "id": 11006100017,
        "name": "ORE Miner"
    },
    {
        "id": 11006100021,
        "name": "'Ion' Miner"
    },
    {
        "id": 11008100006,
        "name": "MK5 Strip Miner"
    },
    {
        "id": 11008100008,
        "name": "MK7 Strip Miner"
    },
    {
        "id": 11008100010,
        "name": "MK9 Strip Miner"
    },
    {
        "id": 11008100012,
        "name": "Single Diode Strip Miner"
    },
    {
        "id": 11008100013,
        "name": "Gallente Strip Miner"
    },
    {
        "id": 11008100017,
        "name": "ORE Strip Miner"
    },
    {
        "id": 11008100021,
        "name": "'Ion' Strip Miner"
    },
    {
        "id": 11012000001,
        "name": "Civilian Small Missile Launcher"
    },
    {
        "id": 11012000002,
        "name": "MK1 Small Missile Launcher"
    },
    {
        "id": 11012000004,
        "name": "MK3 Small Missile Launcher"
    },
    {
        "id": 11012000006,
        "name": "MK5 Small Missile Launcher"
    },
    {
        "id": 11012000008,
        "name": "MK7 Small Missile Launcher"
    },
    {
        "id": 11012000010,
        "name": "MK9 Small Missile Launcher"
    },
    {
        "id": 11012000012,
        "name": "'Gallows' Small Missile Launcher"
    },
    {
        "id": 11012000013,
        "name": "Caldari Navy Small Missile Launcher"
    },
    {
        "id": 11012000014,
        "name": "Republic Fleet Small Missile Launcher"
    },
    {
        "id": 11012000017,
        "name": "True Sansha Small Missile Launcher"
    },
    {
        "id": 11012000018,
        "name": "Dread Guristas Small Missile Launcher"
    },
    {
        "id": 11012000019,
        "name": "Domination Small Missile Launcher"
    },
    {
        "id": 11012000021,
        "name": "'Discipline' Small Missile Launcher"
    },
    {
        "id": 11012000024,
        "name": "Pithi C-Type Small Missile Launcher"
    },
    {
        "id": 11013000001,
        "name": "Civilian Medium Missile Launcher"
    },
    {
        "id": 11013000006,
        "name": "MK5 Medium Missile Launcher"
    },
    {
        "id": 11013000008,
        "name": "MK7 Medium Missile Launcher"
    },
    {
        "id": 11013000010,
        "name": "MK9 Medium Missile Launcher"
    },
    {
        "id": 11013000012,
        "name": "'Challenger' Medium Missile Launcher"
    },
    {
        "id": 11013000013,
        "name": "Caldari Navy Medium Missile Launcher"
    },
    {
        "id": 11013000014,
        "name": "Republic Fleet Medium Missile Launcher"
    },
    {
        "id": 11013000017,
        "name": "True Sansha Medium Missile Launcher"
    },
    {
        "id": 11013000018,
        "name": "Dread Guristas Medium Missile Launcher"
    },
    {
        "id": 11013000019,
        "name": "Domination Medium Missile Launcher"
    },
    {
        "id": 11013000021,
        "name": "'Discipline' Medium Missile Launcher"
    },
    {
        "id": 11013000024,
        "name": "Pithum C-Type Medium Missile Launcher"
    },
    {
        "id": 11014000008,
        "name": "MK7 Large Missile Launcher"
    },
    {
        "id": 11014000010,
        "name": "MK9 Large Missile Launcher"
    },
    {
        "id": 11014000012,
        "name": "'Gallows' Large Missile Launcher"
    },
    {
        "id": 11014000013,
        "name": "Caldari Navy Large Missile Launcher"
    },
    {
        "id": 11014000014,
        "name": "Republic Fleet Large Missile Launcher"
    },
    {
        "id": 11014000019,
        "name": "Domination Large Missile Launcher"
    },
    {
        "id": 11014000021,
        "name": "Hurricane Large Missile Launcher"
    },
    {
        "id": 11014000024,
        "name": "Pith C-Type Large Missile Launcher"
    },
    {
        "id": 11015000006,
        "name": "MK5 Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000008,
        "name": "MK7 Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000010,
        "name": "MK9 Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000012,
        "name": "'Challenger' Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000013,
        "name": "Caldari Navy Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000014,
        "name": "Republic Fleet Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000017,
        "name": "True Sansha Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000018,
        "name": "Dread Guristas Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000019,
        "name": "Domination Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000021,
        "name": "Hurricane Medium Rapid Missile Launcher"
    },
    {
        "id": 11015000024,
        "name": "Pithum C-Type Medium Rapid Missile Launcher"
    },
    {
        "id": 11016000008,
        "name": "MK7 Large Rapid Missile Launcher"
    },
    {
        "id": 11016000010,
        "name": "MK9 Large Rapid Missile Launcher"
    },
    {
        "id": 11016000012,
        "name": "'Gallows' Large Rapid Missile Launcher"
    },
    {
        "id": 11016000013,
        "name": "Caldari Navy Large Rapid Missile Launcher"
    },
    {
        "id": 11016000014,
        "name": "Republic Fleet Large Rapid Missile Launcher"
    },
    {
        "id": 11016000017,
        "name": "True Sansha Large Rapid Missile Launcher"
    },
    {
        "id": 11016000018,
        "name": "Dread Guristas Large Rapid Missile Launcher"
    },
    {
        "id": 11016000019,
        "name": "Domination Large Rapid Missile Launcher"
    },
    {
        "id": 11016000021,
        "name": "Hurricane Large Rapid Missile Launcher"
    },
    {
        "id": 11016000024,
        "name": "Pith C-Type Large Rapid Missile Launcher"
    },
    {
        "id": 11017000006,
        "name": "MK5 Medium Torpedo Launcher"
    },
    {
        "id": 11017000008,
        "name": "MK7 Medium Torpedo Launcher"
    },
    {
        "id": 11017000010,
        "name": "MK9 Medium Torpedo Launcher"
    },
    {
        "id": 11017000012,
        "name": "'Challenger' Medium Torpedo Launcher"
    },
    {
        "id": 11017000013,
        "name": "Caldari Navy Medium Torpedo Launcher"
    },
    {
        "id": 11017000014,
        "name": "Republic Fleet Medium Torpedo Launcher"
    },
    {
        "id": 11017000017,
        "name": "True Sansha Medium Torpedo Launcher"
    },
    {
        "id": 11017000018,
        "name": "Dread Guristas Medium Torpedo Launcher"
    },
    {
        "id": 11017000019,
        "name": "Domination Medium Torpedo Launcher"
    },
    {
        "id": 11017000021,
        "name": "'Heth' Medium Torpedo Launcher"
    },
    {
        "id": 11017000024,
        "name": "Pithum C-Type Medium Torpedo Launcher"
    },
    {
        "id": 11019000004,
        "name": "MK3 Small Torpedo Launcher"
    },
    {
        "id": 11019000006,
        "name": "MK5 Small Torpedo Launcher"
    },
    {
        "id": 11019000008,
        "name": "MK7 Small Torpedo Launcher"
    },
    {
        "id": 11019000010,
        "name": "MK9 Small Torpedo Launcher"
    },
    {
        "id": 11019000012,
        "name": "'Balefire' Small Torpedo Launcher"
    },
    {
        "id": 11019000013,
        "name": "Caldari Navy Small Torpedo Launcher"
    },
    {
        "id": 11019000014,
        "name": "Republic Fleet Small Torpedo Launcher"
    },
    {
        "id": 11019000017,
        "name": "True Sansha Small Torpedo Launcher"
    },
    {
        "id": 11019000021,
        "name": "'Heth' Small Torpedo Launcher"
    },
    {
        "id": 11019000024,
        "name": "Pithi C-Type Small Torpedo Launcher"
    },
    {
        "id": 11020000008,
        "name": "MK7 Large Torpedo Launcher"
    },
    {
        "id": 11020000010,
        "name": "MK9 Large Torpedo Launcher"
    },
    {
        "id": 11020000012,
        "name": "'Barrage' Large Torpedo Launcher"
    },
    {
        "id": 11020000013,
        "name": "Caldari Navy Large Torpedo Launcher"
    },
    {
        "id": 11020000014,
        "name": "Republic Fleet Large Torpedo Launcher"
    },
    {
        "id": 11020000019,
        "name": "Domination Large Torpedo Launcher"
    },
    {
        "id": 11020000021,
        "name": "Hurricane Large Torpedo Launcher"
    },
    {
        "id": 11020000024,
        "name": "Pith C-Type Large Torpedo Launcher"
    },
    {
        "id": 11026000006,
        "name": "MK5 Interdiction Sphere Launcher"
    },
    {
        "id": 11026000008,
        "name": "MK7 Interdiction Sphere Launcher"
    },
    {
        "id": 11026000010,
        "name": "MK9 Interdiction Sphere Launcher"
    },
    {
        "id": 11026000012,
        "name": "'Bubble Gun' Interdiction Sphere Launcher"
    },
    {
        "id": 11026000021,
        "name": "'Devour' Interdiction Sphere Launcher"
    },
    {
        "id": 11031000004,
        "name": "MK3 Small Energy Nosferatu"
    },
    {
        "id": 11031000006,
        "name": "MK5 Small Energy Nosferatu"
    },
    {
        "id": 11031000008,
        "name": "MK7 Small Energy Nosferatu"
    },
    {
        "id": 11031000010,
        "name": "MK9 Small Energy Nosferatu"
    },
    {
        "id": 11031000012,
        "name": "'Upir' Small Energy Nosferatu"
    },
    {
        "id": 11031000013,
        "name": "Imperial Navy Small Energy Nosferatu"
    },
    {
        "id": 11031000018,
        "name": "True Sansha Small Energy Nosferatu"
    },
    {
        "id": 11031000021,
        "name": "'Vrykolakas' Small Energy Nosferatu"
    },
    {
        "id": 11031100006,
        "name": "MK5 Medium Energy Nosferatu"
    },
    {
        "id": 11031100008,
        "name": "MK7 Medium Energy Nosferatu"
    },
    {
        "id": 11031100010,
        "name": "MK9 Medium Energy Nosferatu"
    },
    {
        "id": 11031100012,
        "name": "'Upir' Medium Energy Nosferatu"
    },
    {
        "id": 11031100013,
        "name": "Imperial Navy Medium Energy Nosferatu"
    },
    {
        "id": 11031100017,
        "name": "Dark Blood Medium Energy Nosferatu"
    },
    {
        "id": 11031100018,
        "name": "True Sansha Medium Energy Nosferatu"
    },
    {
        "id": 11031100021,
        "name": "'Vrykolakas' Medium Energy Nosferatu"
    },
    {
        "id": 11031200010,
        "name": "MK9 Large Energy Nosferatu"
    },
    {
        "id": 11031200012,
        "name": "'Upir' Large Energy Nosferatu"
    },
    {
        "id": 11031200013,
        "name": "Imperial Navy Large Energy Nosferatu"
    },
    {
        "id": 11031200017,
        "name": "Dark Blood Large Energy Nosferatu"
    },
    {
        "id": 11031200018,
        "name": "True Sansha Large Energy Nosferatu"
    },
    {
        "id": 11031200021,
        "name": "'Vrykolakas' Large Energy Nosferatu"
    },
    {
        "id": 11032000004,
        "name": "MK3 Small Energy Neutralizer"
    },
    {
        "id": 11032000006,
        "name": "MK5 Small Energy Neutralizer"
    },
    {
        "id": 11032000008,
        "name": "MK7 Small Energy Neutralizer"
    },
    {
        "id": 11032000010,
        "name": "MK9 Small Energy Neutralizer"
    },
    {
        "id": 11032000012,
        "name": "'Caltrop' Small Energy Neutralizer"
    },
    {
        "id": 11032000013,
        "name": "Imperial Navy Small Energy Neutralizer"
    },
    {
        "id": 11032000018,
        "name": "True Sansha Small Energy Neutralizer"
    },
    {
        "id": 11032000021,
        "name": "'Moat' Small Energy Neutralizer"
    },
    {
        "id": 11032100006,
        "name": "MK5 Medium Energy Neutralizer"
    },
    {
        "id": 11032100008,
        "name": "MK7 Medium Energy Neutralizer"
    },
    {
        "id": 11032100010,
        "name": "MK9 Medium Energy Neutralizer"
    },
    {
        "id": 11032100012,
        "name": "'Caltrop' Medium Energy Neutralizer"
    },
    {
        "id": 11032100013,
        "name": "Imperial Navy Medium Energy Neutralizer"
    },
    {
        "id": 11032100021,
        "name": "'Moat' Medium Energy Neutralizer"
    },
    {
        "id": 11032200010,
        "name": "MK9 Large Energy Neutralizer"
    },
    {
        "id": 11032200012,
        "name": "'Caltrop' Large Energy Neutralizer"
    },
    {
        "id": 11032200013,
        "name": "Imperial Navy Large Energy Neutralizer"
    },
    {
        "id": 11032200021,
        "name": "'Moat' Large Energy Neutralizer"
    },
    {
        "id": 11100000004,
        "name": "MK3 Small Remote Capacitor Transmitter"
    },
    {
        "id": 11100000006,
        "name": "MK5 Small Remote Capacitor Transmitter"
    },
    {
        "id": 11100000008,
        "name": "MK7 Small Remote Capacitor Transmitter"
    },
    {
        "id": 11100000010,
        "name": "MK9 Small Remote Capacitor Transmitter"
    },
    {
        "id": 11100000012,
        "name": "'Squire' Small Remote Capacitor Transmitter"
    },
    {
        "id": 11100000013,
        "name": "Imperial Navy Small Remote Capacitor Transmitter"
    },
    {
        "id": 11100000021,
        "name": "'Knight' Small Remote Capacitor Transmitter"
    },
    {
        "id": 11100100006,
        "name": "MK5 Medium Remote Capacitor Transmitter"
    },
    {
        "id": 11100100008,
        "name": "MK7 Medium Remote Capacitor Transmitter"
    },
    {
        "id": 11100100010,
        "name": "MK9 Medium Remote Capacitor Transmitter"
    },
    {
        "id": 11100100012,
        "name": "Squire' Medium Remote Capacitor Transmitter"
    },
    {
        "id": 11100100013,
        "name": "Imperial Navy Medium Remote Capacitor Transmitter"
    },
    {
        "id": 11100100021,
        "name": "'Chivalry' Medium Remote Capacitor Transmitter"
    },
    {
        "id": 11100200010,
        "name": "MK9 Large Remote Capacitor Transmitter"
    },
    {
        "id": 11100200012,
        "name": "'Squire' Large Remote Capacitor Transmitter"
    },
    {
        "id": 11100200013,
        "name": "Imperial Navy Large Remote Capacitor Transmitter"
    },
    {
        "id": 11100200021,
        "name": "'Chivalry' Large Remote Capacitor Transmitter"
    },
    {
        "id": 11101000004,
        "name": "MK3 Small Remote Shield Booster"
    },
    {
        "id": 11101000006,
        "name": "MK5 Small Remote Shield Booster"
    },
    {
        "id": 11101000008,
        "name": "MK7 Small Remote Shield Booster"
    },
    {
        "id": 11101000010,
        "name": "MK9 Small Remote Shield Booster"
    },
    {
        "id": 11101000012,
        "name": "'Micro' Small Remote Shield Booster"
    },
    {
        "id": 11101000013,
        "name": "Caldari Navy Small Remote Shield Booster"
    },
    {
        "id": 11101000021,
        "name": "'Healer' Small Remote Shield Booster"
    },
    {
        "id": 11101000024,
        "name": "Pithi C-Type Small Remote Shield Booster"
    },
    {
        "id": 11101000025,
        "name": "Gistii C-Type Small Remote Shield Booster"
    },
    {
        "id": 11101100006,
        "name": "MK5 Medium Remote Shield Booster"
    },
    {
        "id": 11101100008,
        "name": "MK7 Medium Remote Shield Booster"
    },
    {
        "id": 11101100010,
        "name": "MK9 Medium Remote Shield Booster"
    },
    {
        "id": 11101100012,
        "name": "'Micro' Medium Remote Shield Booster"
    },
    {
        "id": 11101100013,
        "name": "Caldari Navy Medium Remote Shield Booster"
    },
    {
        "id": 11101100021,
        "name": "'Healer' Medium Remote Shield Booster"
    },
    {
        "id": 11101100024,
        "name": "Pithum C-Type Medium Remote Shield Booster"
    },
    {
        "id": 11101100025,
        "name": "Gistum C-Type Medium Remote Shield Booster"
    },
    {
        "id": 11101200010,
        "name": "MK9 Large Remote Shield Booster"
    },
    {
        "id": 11101200012,
        "name": "'Micro' Large Remote Shield Booster"
    },
    {
        "id": 11101200013,
        "name": "Caldari Navy Large Remote Shield Booster"
    },
    {
        "id": 11101200021,
        "name": "'Healer' Large Remote Shield Booster"
    },
    {
        "id": 11101200024,
        "name": "Pith C-Type Large Remote Shield Booster"
    },
    {
        "id": 11101200025,
        "name": "Gist C-Type Large Remote Shield Booster"
    },
    {
        "id": 11102000004,
        "name": "MK3 Small Remote Armor Repairer"
    },
    {
        "id": 11102000006,
        "name": "MK5 Small Remote Armor Repairer"
    },
    {
        "id": 11102000008,
        "name": "MK7 Small Remote Armor Repairer"
    },
    {
        "id": 11102000010,
        "name": "MK9 Small Remote Armor Repairer"
    },
    {
        "id": 11102000012,
        "name": "'Beatnik' Small Remote Armor Repairer"
    },
    {
        "id": 11102000013,
        "name": "Imperial Navy Small Remote Armor Repairer"
    },
    {
        "id": 11102000017,
        "name": "Dark Blood Small Remote Armor Repairer"
    },
    {
        "id": 11102000021,
        "name": "'Tranquil' Small Remote Armor Repairer"
    },
    {
        "id": 11102000024,
        "name": "Corpii C-Type Small Remote Armor Repairer"
    },
    {
        "id": 11102000025,
        "name": "Coreli C-Type Small Remote Armor Repairer"
    },
    {
        "id": 11102100006,
        "name": "MK5 Medium Remote Armor Repairer"
    },
    {
        "id": 11102100008,
        "name": "MK7 Medium Remote Armor Repairer"
    },
    {
        "id": 11102100010,
        "name": "MK9 Medium Remote Armor Repairer"
    },
    {
        "id": 11102100012,
        "name": "'Beatnik' Medium Remote Armor Repairer"
    },
    {
        "id": 11102100013,
        "name": "Imperial Navy Medium Remote Armor Repairer"
    },
    {
        "id": 11102100021,
        "name": "'Tranquil' Medium Remote Armor Repairer"
    },
    {
        "id": 11102100024,
        "name": "Corpum C-Type Medium Remote Armor Repairer"
    },
    {
        "id": 11102100025,
        "name": "Corelum C-Type Medium Remote Armor Repairer"
    },
    {
        "id": 11102200010,
        "name": "MK9 Large Remote Armor Repairer"
    },
    {
        "id": 11102200012,
        "name": "'Beatnik' Large Remote Armor Repairer"
    },
    {
        "id": 11102200013,
        "name": "Imperial Navy Large Remote Armor Repairer"
    },
    {
        "id": 11102200021,
        "name": "'Peace' Large Remote Armor Repairer"
    },
    {
        "id": 11102200024,
        "name": "Corpus C-Type Large Remote Armor Repairer"
    },
    {
        "id": 11102200025,
        "name": "Core C-Type Large Remote Armor Repairer"
    },
    {
        "id": 11108000006,
        "name": "MK5 Cloaking Device"
    },
    {
        "id": 11108000008,
        "name": "MK7 Cloaking Device"
    },
    {
        "id": 11108000010,
        "name": "MK9 Cloaking Device"
    },
    {
        "id": 11108000012,
        "name": "'Guise' Cloaking Device"
    },
    {
        "id": 11108000013,
        "name": "Caldari Navy Cloaking Device"
    },
    {
        "id": 11108000017,
        "name": "Dread Guristas Cloaking Device"
    },
    {
        "id": 11108000018,
        "name": "CONCORD Cloaking Device"
    },
    {
        "id": 11108000021,
        "name": "'Smokescreen' Cloaking Device"
    },
    {
        "id": 11116000006,
        "name": "MK5 Warp Disruption Field Generator"
    },
    {
        "id": 11116000008,
        "name": "MK7 Warp Disruption Field Generator"
    },
    {
        "id": 11116000010,
        "name": "MK9 Warp Disruption Field Generator"
    },
    {
        "id": 11116000012,
        "name": "'Static' Warp Disruption Field Generator"
    },
    {
        "id": 11116000021,
        "name": "'Magnet' Warp Disruption Field Generator"
    },
    {
        "id": 11123000006,
        "name": "MK5 Covert Ops Cloaking Device"
    },
    {
        "id": 11123000008,
        "name": "MK7 Covert Ops Cloaking Device"
    },
    {
        "id": 11123000010,
        "name": "MK9 Covert Ops Cloaking Device"
    },
    {
        "id": 11123000012,
        "name": "'Camouflage' Covert Ops Cloaking Device"
    },
    {
        "id": 11123000017,
        "name": "SOE Covert Ops Cloaking Device"
    },
    {
        "id": 11123000021,
        "name": "'Smoke' Covert Ops Cloaking Device"
    },
    {
        "id": 11300100002,
        "name": "MK1 Small Shield Extender"
    },
    {
        "id": 11300100004,
        "name": "MK3 Small Shield Extender"
    },
    {
        "id": 11300100006,
        "name": "MK5 Small Shield Extender"
    },
    {
        "id": 11300100008,
        "name": "MK7 Small Shield Extender"
    },
    {
        "id": 11300100010,
        "name": "MK9 Small Shield Extender"
    },
    {
        "id": 11300100012,
        "name": "'Wolf' Small Shield Extenders"
    },
    {
        "id": 11300100013,
        "name": "Caldari Navy Small Shield Extender"
    },
    {
        "id": 11300100014,
        "name": "Republic Fleet Small Shield Extender"
    },
    {
        "id": 11300100021,
        "name": "'Trapper' Small Shield Extender"
    },
    {
        "id": 11300200006,
        "name": "MK5 Medium Shield Extender"
    },
    {
        "id": 11300200008,
        "name": "MK7 Medium Shield Extender"
    },
    {
        "id": 11300200010,
        "name": "MK9 Medium Shield Extender"
    },
    {
        "id": 11300200012,
        "name": "'Canyon' Medium Shield Extender"
    },
    {
        "id": 11300200013,
        "name": "Caldari Navy Medium Shield Extender"
    },
    {
        "id": 11300200014,
        "name": "Republic Fleet Medium Shield Extender"
    },
    {
        "id": 11300200017,
        "name": "Dread Guristas Medium Shield Extender"
    },
    {
        "id": 11300200021,
        "name": "Patriot Medium Shield Extension Device"
    },
    {
        "id": 11300300010,
        "name": "MK9 Large Shield Extender"
    },
    {
        "id": 11300300012,
        "name": "'Sheriff' Large Shield Extender"
    },
    {
        "id": 11300300013,
        "name": "Caldari Navy Large Shield Extender"
    },
    {
        "id": 11300300014,
        "name": "Republic Fleet Large Shield Extender"
    },
    {
        "id": 11300300021,
        "name": "'Protector' Large Shield Extender"
    },
    {
        "id": 11302000001,
        "name": "Civilian Small Shield Booster"
    },
    {
        "id": 11302000002,
        "name": "MK1 Small Shield Booster"
    },
    {
        "id": 11302000004,
        "name": "MK3 Small Shield Booster"
    },
    {
        "id": 11302000006,
        "name": "MK5 Small Shield Booster"
    },
    {
        "id": 11302000008,
        "name": "MK7 Small Shield Booster"
    },
    {
        "id": 11302000010,
        "name": "MK9 Small Shield Booster"
    },
    {
        "id": 11302000012,
        "name": "'Settler' Small Shield Booster"
    },
    {
        "id": 11302000013,
        "name": "Caldari Navy Small Shield Booster"
    },
    {
        "id": 11302000014,
        "name": "Republic Fleet Small Shield Booster"
    },
    {
        "id": 11302000017,
        "name": "True Sansha Small Shield Booster"
    },
    {
        "id": 11302000018,
        "name": "Dread Guristas Small Shield Booster"
    },
    {
        "id": 11302000019,
        "name": "Domination Small Shield Booster"
    },
    {
        "id": 11302000021,
        "name": "Veteran Small Shield Booster"
    },
    {
        "id": 11302000024,
        "name": "Centii C-Type Small Shield Booster"
    },
    {
        "id": 11302000025,
        "name": "Pithi C-Type Small Shield Booster"
    },
    {
        "id": 11302000026,
        "name": "Gistii C-Type Small Shield Booster"
    },
    {
        "id": 11302100001,
        "name": "Civilian Medium Shield Booster"
    },
    {
        "id": 11302100006,
        "name": "MK5 Medium Shield Booster"
    },
    {
        "id": 11302100008,
        "name": "MK7 Medium Shield Booster"
    },
    {
        "id": 11302100010,
        "name": "MK9 Medium Shield Booster"
    },
    {
        "id": 11302100012,
        "name": "'Lone Ranger' Medium Shield Booster"
    },
    {
        "id": 11302100013,
        "name": "Caldari Navy Medium Shield Booster"
    },
    {
        "id": 11302100014,
        "name": "Republic Fleet Medium Shield Booster"
    },
    {
        "id": 11302100017,
        "name": "True Sansha Medium Shield Booster"
    },
    {
        "id": 11302100018,
        "name": "Dread Guristas Medium Shield Booster"
    },
    {
        "id": 11302100019,
        "name": "Domination Medium Shield Booster"
    },
    {
        "id": 11302100021,
        "name": "'Disaster' Medium Shield Booster"
    },
    {
        "id": 11302100024,
        "name": "Centum C-Type Medium Shield Booster"
    },
    {
        "id": 11302100025,
        "name": "Pithum C-Type Medium Shield Booster"
    },
    {
        "id": 11302100026,
        "name": "Gistum C-Type Medium Shield Booster"
    },
    {
        "id": 11302200010,
        "name": "MK9 Large Shield Booster"
    },
    {
        "id": 11302200012,
        "name": "'Outlaw' Large Shield Booster"
    },
    {
        "id": 11302200013,
        "name": "Caldari Navy Large Shield Booster"
    },
    {
        "id": 11302200014,
        "name": "Republic Fleet Large Shield Booster"
    },
    {
        "id": 11302200017,
        "name": "True Sansha Large Shield Booster"
    },
    {
        "id": 11302200018,
        "name": "Dread Guristas Large Shield Booster"
    },
    {
        "id": 11302200019,
        "name": "Domination Large Shield Booster"
    },
    {
        "id": 11302200021,
        "name": "'Seeker' Large Shield Booster"
    },
    {
        "id": 11302200024,
        "name": "Centus C-Type Large Shield Booster"
    },
    {
        "id": 11302200025,
        "name": "Pith C-Type Large Shield Booster"
    },
    {
        "id": 11302200026,
        "name": "Gist C-Type Large Shield Booster"
    },
    {
        "id": 11304000004,
        "name": "MK3 Small Microwarpdrive"
    },
    {
        "id": 11304000006,
        "name": "MK5 Small Microwarpdrive"
    },
    {
        "id": 11304000008,
        "name": "MK7 Small Microwarpdrive"
    },
    {
        "id": 11304000010,
        "name": "MK9 Small Microwarpdrive"
    },
    {
        "id": 11304000012,
        "name": "'Dealer' Small Microwarpdrive"
    },
    {
        "id": 11304000013,
        "name": "Federation Navy Small Microwarpdrive"
    },
    {
        "id": 11304000014,
        "name": "Republic Fleet Small Microwarpdrive"
    },
    {
        "id": 11304000017,
        "name": "Shadow Serpentis Small Microwarpdrive"
    },
    {
        "id": 11304000018,
        "name": "Domination Small Microwarpdrive"
    },
    {
        "id": 11304000021,
        "name": "'Scout' Small Microwarpdrive"
    },
    {
        "id": 11304000024,
        "name": "Gistii C-Type Small Microwarpdrive"
    },
    {
        "id": 11304100006,
        "name": "MK5 Medium Microwarpdrive"
    },
    {
        "id": 11304100008,
        "name": "MK7 Medium Microwarpdrive"
    },
    {
        "id": 11304100010,
        "name": "MK9 Medium Microwarpdrive"
    },
    {
        "id": 11304100012,
        "name": "'Dealer' Medium Microwarpdrive"
    },
    {
        "id": 11304100013,
        "name": "Federation Navy Medium Microwarpdrive"
    },
    {
        "id": 11304100014,
        "name": "Republic Fleet Medium Microwarpdrive"
    },
    {
        "id": 11304100017,
        "name": "Shadow Serpentis Medium Microwarpdrive"
    },
    {
        "id": 11304100018,
        "name": "Domination Medium Microwarpdrive"
    },
    {
        "id": 11304100021,
        "name": "'Scout' Medium Microwarpdrive"
    },
    {
        "id": 11304100024,
        "name": "Gistum C-Type Medium Microwarpdrive"
    },
    {
        "id": 11304200010,
        "name": "MK9 Large Microwarpdrive"
    },
    {
        "id": 11304200012,
        "name": "'Dealer' Large Microwarpdrive"
    },
    {
        "id": 11304200013,
        "name": "Federation Navy Large Microwarpdrive"
    },
    {
        "id": 11304200014,
        "name": "Republic Fleet Large Microwarpdrive"
    },
    {
        "id": 11304200018,
        "name": "Domination Large Microwarpdrive"
    },
    {
        "id": 11304200021,
        "name": "'Scout' Large Microwarpdrive"
    },
    {
        "id": 11304200024,
        "name": "Gist C-Type Large Microwarpdrive"
    },
    {
        "id": 11304500001,
        "name": "Civilian Small Afterburner"
    },
    {
        "id": 11304500002,
        "name": "MK1 Small Afterburner"
    },
    {
        "id": 11304500004,
        "name": "MK3 Small Afterburner"
    },
    {
        "id": 11304500006,
        "name": "MK5 Small Afterburner"
    },
    {
        "id": 11304500008,
        "name": "MK7 Small Afterburner"
    },
    {
        "id": 11304500010,
        "name": "MK9 Small Afterburner"
    },
    {
        "id": 11304500012,
        "name": "Smuggler Small Afterburner"
    },
    {
        "id": 11304500013,
        "name": "Federation Navy Small Afterburner"
    },
    {
        "id": 11304500014,
        "name": "Republic Fleet Small Afterburner"
    },
    {
        "id": 11304500017,
        "name": "Shadow Serpentis Small Afterburner"
    },
    {
        "id": 11304500018,
        "name": "Domination Small Afterburner"
    },
    {
        "id": 11304500021,
        "name": "'Ranger' Small Afterburner"
    },
    {
        "id": 11304500024,
        "name": "Centii C-Type Small Afterburner"
    },
    {
        "id": 11304500025,
        "name": "Coreli C-Type Small Afterburner"
    },
    {
        "id": 11304600001,
        "name": "Civilian Medium Afterburner"
    },
    {
        "id": 11304600006,
        "name": "MK5 Medium Afterburner"
    },
    {
        "id": 11304600008,
        "name": "MK7 Medium Afterburner"
    },
    {
        "id": 11304600010,
        "name": "MK9 Medium Afterburner"
    },
    {
        "id": 11304600012,
        "name": "Smuggler Medium Afterburner"
    },
    {
        "id": 11304600013,
        "name": "Federation Navy Medium Afterburner"
    },
    {
        "id": 11304600014,
        "name": "Republic Fleet Medium Afterburner"
    },
    {
        "id": 11304600017,
        "name": "Shadow Serpentis Medium Afterburner"
    },
    {
        "id": 11304600018,
        "name": "Domination Medium Afterburner"
    },
    {
        "id": 11304600021,
        "name": "'Ranger' Medium Afterburner"
    },
    {
        "id": 11304600024,
        "name": "Centum C-Type Medium Afterburner"
    },
    {
        "id": 11304600025,
        "name": "Corelum C-Type Medium Afterburner"
    },
    {
        "id": 11304700010,
        "name": "MK9 Large Afterburner"
    },
    {
        "id": 11304700012,
        "name": "Smuggler Large Afterburner"
    },
    {
        "id": 11304700013,
        "name": "Federation Navy Large Afterburner"
    },
    {
        "id": 11304700014,
        "name": "Republic Fleet Large Afterburner"
    },
    {
        "id": 11304700021,
        "name": "'Ranger' Large Afterburner"
    },
    {
        "id": 11304700024,
        "name": "Centus C-Type Large Afterburner"
    },
    {
        "id": 11304700025,
        "name": "Core C-Type Large Afterburner"
    },
    {
        "id": 11308500004,
        "name": "MK3 Warp Disruptor"
    },
    {
        "id": 11308500006,
        "name": "MK5 Warp Disruptor"
    },
    {
        "id": 11308500008,
        "name": "MK7 Warp Disruptor"
    },
    {
        "id": 11308500010,
        "name": "MK9 Warp Disruptor"
    },
    {
        "id": 11308500012,
        "name": "'Interruptive' Warp Disruptor"
    },
    {
        "id": 11308500013,
        "name": "Caldari Navy Warp Disruptor"
    },
    {
        "id": 11308500014,
        "name": "Federation Navy Warp Disruptor"
    },
    {
        "id": 11308500015,
        "name": "Republic Fleet Warp Disruptor"
    },
    {
        "id": 11308500017,
        "name": "True Sansha Warp Disruptor"
    },
    {
        "id": 11308500018,
        "name": "Dark Blood Warp Disruptor"
    },
    {
        "id": 11308500019,
        "name": "Dread Guristas Warp Disruptor"
    },
    {
        "id": 11308500020,
        "name": "Shadow Serpentis Warp Disruptor"
    },
    {
        "id": 11308500021,
        "name": "'Predator' Warp Disruptor"
    },
    {
        "id": 11309100004,
        "name": "MK3 Small Capacitor Battery"
    },
    {
        "id": 11309100006,
        "name": "MK5 Small Capacitor Battery"
    },
    {
        "id": 11309100008,
        "name": "MK7 Small Capacitor Battery"
    },
    {
        "id": 11309100010,
        "name": "MK9 Small Capacitor Battery"
    },
    {
        "id": 11309100012,
        "name": "'Acolyth' Small Capacitor Battery"
    },
    {
        "id": 11309100013,
        "name": "Republic Fleet Small Capacitor Battery"
    },
    {
        "id": 11309100021,
        "name": "'Demolish' Small Capacitor Battery"
    },
    {
        "id": 11309100024,
        "name": "Gistii C-Type Small Capacitor Batteries"
    },
    {
        "id": 11309200006,
        "name": "MK5 Medium Capacitor Battery"
    },
    {
        "id": 11309200008,
        "name": "MK7 Medium Capacitor Battery"
    },
    {
        "id": 11309200010,
        "name": "MK9 Medium Capacitor Battery"
    },
    {
        "id": 11309200012,
        "name": "'Acolyth' Medium Capacitor Battery"
    },
    {
        "id": 11309200013,
        "name": "Republic Fleet Medium Capacitor Battery"
    },
    {
        "id": 11309200017,
        "name": "Domination Medium Capacitor Battery"
    },
    {
        "id": 11309200021,
        "name": "'Demolish' Medium Capacitor Battery"
    },
    {
        "id": 11309200024,
        "name": "Gistum C-Type Medium Capacitor Battery"
    },
    {
        "id": 11309300010,
        "name": "MK9 Large Capacitor Battery"
    },
    {
        "id": 11309300012,
        "name": "'Acolyth' Large Capacitor Batteries"
    },
    {
        "id": 11309300013,
        "name": "Republic Fleet Large Capacitor Battery"
    },
    {
        "id": 11309300017,
        "name": "Domination Large Capacitor Battery"
    },
    {
        "id": 11309300021,
        "name": "'Demolish' Large Capacitor Battery"
    },
    {
        "id": 11309300024,
        "name": "Gist C-Type Large Capacitor Battery"
    },
    {
        "id": 11311000001,
        "name": "Civilian Stasis Webifier"
    },
    {
        "id": 11311000004,
        "name": "MK3 Stasis Webifier"
    },
    {
        "id": 11311000006,
        "name": "MK5 Stasis Webifier"
    },
    {
        "id": 11311000008,
        "name": "MK7 Stasis Webifier"
    },
    {
        "id": 11311000010,
        "name": "MK9 Stasis Webifier"
    },
    {
        "id": 11311000012,
        "name": "'Interruptive' Stasis Webifier"
    },
    {
        "id": 11311000013,
        "name": "Caldari Navy Stasis Webifier"
    },
    {
        "id": 11311000014,
        "name": "Federation Navy Stasis Webifier"
    },
    {
        "id": 11311000015,
        "name": "Republic Fleet Stasis Webifier"
    },
    {
        "id": 11311000017,
        "name": "True Sansha Stasis Webifier"
    },
    {
        "id": 11311000018,
        "name": "Dark Blood Stasis Webifier"
    },
    {
        "id": 11311000019,
        "name": "Dread Guristas Stasis Webifier"
    },
    {
        "id": 11311000020,
        "name": "Shadow Serpentis Stasis Webifier"
    },
    {
        "id": 11311000021,
        "name": "'Predator' Stasis Webifier"
    },
    {
        "id": 11313400006,
        "name": "MK5 Adaptive Invulnerability Field"
    },
    {
        "id": 11313400008,
        "name": "MK7 Adaptive Invulnerability Field"
    },
    {
        "id": 11313400010,
        "name": "MK9 Adaptive Invulnerability Field"
    },
    {
        "id": 11313400012,
        "name": "Posse Adaptive Invulnerability Field"
    },
    {
        "id": 11313400013,
        "name": "Caldari Navy Adaptive Invulnerability Field"
    },
    {
        "id": 11313400017,
        "name": "Dread Guristas Adaptive Invulnerability Field"
    },
    {
        "id": 11313400018,
        "name": "Domination Adaptive Invulnerability Field"
    },
    {
        "id": 11313400021,
        "name": "'Enterprise' Adaptive Invulnerability Field"
    },
    {
        "id": 11313400024,
        "name": "Pith C-Type Adaptive Invulnerability Field"
    },
    {
        "id": 11313400025,
        "name": "Gist C-Type Adaptive Invulnerability Field"
    },
    {
        "id": 11319000004,
        "name": "MK3 Sensor Dampener"
    },
    {
        "id": 11319000006,
        "name": "MK5 Sensor Dampener"
    },
    {
        "id": 11319000008,
        "name": "MK7 Sensor Dampener"
    },
    {
        "id": 11319000010,
        "name": "MK9 Sensor Dampener"
    },
    {
        "id": 11319000012,
        "name": "'Smoke' Sensor Dampener"
    },
    {
        "id": 11319000013,
        "name": "Federation Navy Sensor Dampener"
    },
    {
        "id": 11319000021,
        "name": "'Code Cracker' Sensor Dampener"
    },
    {
        "id": 11322000006,
        "name": "MK5 Tracking Computer"
    },
    {
        "id": 11322000008,
        "name": "MK7 Tracking Computer"
    },
    {
        "id": 11322000010,
        "name": "MK9 Tracking Computer"
    },
    {
        "id": 11322000012,
        "name": "'Marketeer' Tracking Computer"
    },
    {
        "id": 11322000013,
        "name": "Federation Navy Tracking Computer"
    },
    {
        "id": 11322000017,
        "name": "Shadow Serpentis Tracking Computer"
    },
    {
        "id": 11322000021,
        "name": "'Eagle' Tracking Computer"
    },
    {
        "id": 11330000004,
        "name": "MK3 Target Painter"
    },
    {
        "id": 11330000006,
        "name": "MK5 Target Painter"
    },
    {
        "id": 11330000008,
        "name": "MK7 Target Painter"
    },
    {
        "id": 11330000010,
        "name": "MK9 Target Painter"
    },
    {
        "id": 11330000012,
        "name": "'Guide' Target Painter"
    },
    {
        "id": 11330000013,
        "name": "Republic Fleet Target Painter"
    },
    {
        "id": 11330000021,
        "name": "'Halley' Target Painter"
    },
    {
        "id": 11333000006,
        "name": "MK5 Drone Navigation Computer"
    },
    {
        "id": 11333000008,
        "name": "MK7 Drone Navigation Computer"
    },
    {
        "id": 11333000010,
        "name": "MK9 Drone Navigation Computer"
    },
    {
        "id": 11333000012,
        "name": "'Decoder' Drone Navigation Computer"
    },
    {
        "id": 11333000013,
        "name": "Federation Navy Drone Navigation Computer"
    },
    {
        "id": 11333000021,
        "name": "'Supervisor' Drone Navigation Computer"
    },
    {
        "id": 11334000006,
        "name": "MK5 Omnidirectional Tracking Link"
    },
    {
        "id": 11334000008,
        "name": "MK7 Omnidirectional Tracking Link"
    },
    {
        "id": 11334000010,
        "name": "MK9 Omnidirectional Tracking Link"
    },
    {
        "id": 11334000012,
        "name": "'Decoder' Omnidirectional Tracking Link"
    },
    {
        "id": 11334000013,
        "name": "Imperial Navy Omnidirectional Tracking Link"
    },
    {
        "id": 11334000014,
        "name": "Federation Navy Omnidirectional Tracking Link"
    },
    {
        "id": 11334000021,
        "name": "'Supervisor' Omnidirectional Tracking Link"
    },
    {
        "id": 11340000006,
        "name": "MK5 Missile Guidance Computer"
    },
    {
        "id": 11340000008,
        "name": "MK7 Missile Guidance Computer"
    },
    {
        "id": 11340000010,
        "name": "MK9 Missile Guidance Computer"
    },
    {
        "id": 11340000012,
        "name": "'Elusive' Missile Guidance Computer"
    },
    {
        "id": 11340000013,
        "name": "Caldari Navy Missile Guidance Computer"
    },
    {
        "id": 11340000021,
        "name": "'Hook' Missile Guidance Computer"
    },
    {
        "id": 11347000004,
        "name": "MK3 Warp Scrambler"
    },
    {
        "id": 11347000006,
        "name": "MK5 Warp Scrambler"
    },
    {
        "id": 11347000008,
        "name": "MK7 Warp Scrambler"
    },
    {
        "id": 11347000010,
        "name": "MK9 Warp Scrambler"
    },
    {
        "id": 11347000012,
        "name": "'Interruptive' Warp Scrambler"
    },
    {
        "id": 11347000013,
        "name": "Caldari Navy Warp Scrambler"
    },
    {
        "id": 11347000014,
        "name": "Federation Navy Warp Scrambler"
    },
    {
        "id": 11347000015,
        "name": "Republic Fleet Warp Scrambler"
    },
    {
        "id": 11347000017,
        "name": "True Sansha Warp Scrambler"
    },
    {
        "id": 11347000019,
        "name": "Dread Guristas Warp Scrambler"
    },
    {
        "id": 11347000021,
        "name": "'Predator' Warp Scrambler"
    },
    {
        "id": 11348000004,
        "name": "MK3 Tracking Disruptor"
    },
    {
        "id": 11348000006,
        "name": "MK5 Tracking Disruptor"
    },
    {
        "id": 11348000008,
        "name": "MK7 Tracking Disruptor"
    },
    {
        "id": 11348000010,
        "name": "MK9 Tracking Disruptor"
    },
    {
        "id": 11348000012,
        "name": "'Basic' Tracking Disruptor"
    },
    {
        "id": 11348000013,
        "name": "Imperial Navy Tracking Disruptor"
    },
    {
        "id": 11348000018,
        "name": "True Sansha Tracking Disruptor"
    },
    {
        "id": 11348000021,
        "name": "'Virus' Tracking Disruptor"
    },
    {
        "id": 11349000004,
        "name": "MK3 Guidance Disruptor"
    },
    {
        "id": 11349000006,
        "name": "MK5 Guidance Disruptor"
    },
    {
        "id": 11349000008,
        "name": "MK7 Guidance Disruptor"
    },
    {
        "id": 11349000010,
        "name": "MK9 Guidance Disruptor"
    },
    {
        "id": 11349000012,
        "name": "'Basic' Guidance Disruptor"
    },
    {
        "id": 11349000013,
        "name": "Caldari Navy Guidance Disruptor"
    },
    {
        "id": 11349000021,
        "name": "'Virus' Guidance Disruptor"
    },
    {
        "id": 11501000002,
        "name": "MK1 Gyrostabilizer"
    },
    {
        "id": 11501000004,
        "name": "MK3 Gyrostabilizer"
    },
    {
        "id": 11501000006,
        "name": "MK5 Gyrostabilizer"
    },
    {
        "id": 11501000008,
        "name": "MK7 Gyrostabilizer"
    },
    {
        "id": 11501000010,
        "name": "MK9 Gyrostabilizer"
    },
    {
        "id": 11501000012,
        "name": "Basic Gyrostabilizer"
    },
    {
        "id": 11501000013,
        "name": "Republic Fleet Gyrostabilizer"
    },
    {
        "id": 11501000017,
        "name": "Domination Gyrostabilizer"
    },
    {
        "id": 11501000021,
        "name": "'Rebirth' Gyrostabilizer"
    },
    {
        "id": 11501000024,
        "name": "Gistum C-Type Gyrostabilizers"
    },
    {
        "id": 11502000006,
        "name": "MK5 Damage Control"
    },
    {
        "id": 11502000008,
        "name": "MK7 Damage Control"
    },
    {
        "id": 11502000010,
        "name": "MK9 Damage Control"
    },
    {
        "id": 11502000012,
        "name": "Basic Damage Control"
    },
    {
        "id": 11502000013,
        "name": "Imperial Navy Damage Control"
    },
    {
        "id": 11502000014,
        "name": "Federation Navy Damage Control"
    },
    {
        "id": 11502000017,
        "name": "Shadow Serpentis Damage Control"
    },
    {
        "id": 11502000018,
        "name": "Sentient Damage Control"
    },
    {
        "id": 11502000021,
        "name": "All-round Damage Control"
    },
    {
        "id": 11503000001,
        "name": "Civilian Small Armor Repairer"
    },
    {
        "id": 11503000002,
        "name": "MK1 Small Armor Repairer"
    },
    {
        "id": 11503000004,
        "name": "MK3 Small Armor Repairer"
    },
    {
        "id": 11503000006,
        "name": "MK5 Small Armor Repairer"
    },
    {
        "id": 11503000008,
        "name": "MK7 Small Armor Repairer"
    },
    {
        "id": 11503000010,
        "name": "MK9 Small Armor Repairer"
    },
    {
        "id": 11503000012,
        "name": "Gorget Small Armor Repairer"
    },
    {
        "id": 11503000013,
        "name": "Imperial Navy Small Armor Repairer"
    },
    {
        "id": 11503000014,
        "name": "Federation Navy Small Armor Repairer"
    },
    {
        "id": 11503000017,
        "name": "Dark Blood Small Armor Repairer"
    },
    {
        "id": 11503000018,
        "name": "Shadow Serpentis Small Armor Repairer"
    },
    {
        "id": 11503000021,
        "name": "'Knight' Small Armor Repairer"
    },
    {
        "id": 11503000024,
        "name": "Corpii C-Type Small Armor Repairer"
    },
    {
        "id": 11503000025,
        "name": "Coreli C-Type Small Armor Repairer"
    },
    {
        "id": 11503100001,
        "name": "Civilian Medium Armor Repairer"
    },
    {
        "id": 11503100006,
        "name": "MK5 Medium Armor Repairer"
    },
    {
        "id": 11503100008,
        "name": "MK7 Medium Armor Repairer"
    },
    {
        "id": 11503100010,
        "name": "MK9 Medium Armor Repairer"
    },
    {
        "id": 11503100012,
        "name": "'Gorget' Medium Armor Repairer"
    },
    {
        "id": 11503100013,
        "name": "Imperial Navy Medium Armor Repairer"
    },
    {
        "id": 11503100014,
        "name": "Federation Navy Medium Armor Repairer"
    },
    {
        "id": 11503100017,
        "name": "Dark Blood Medium Armor Repairer"
    },
    {
        "id": 11503100018,
        "name": "Shadow Serpentis Medium Armor Repairer"
    },
    {
        "id": 11503100021,
        "name": "'Knight' Medium Armor Repairer"
    },
    {
        "id": 11503100024,
        "name": "Corpum C-Type Medium Armor Repairer"
    },
    {
        "id": 11503100025,
        "name": "Corelum C-Type Medium Armor Repairer"
    },
    {
        "id": 11503200010,
        "name": "MK9 Large Armor Repairer"
    },
    {
        "id": 11503200012,
        "name": "'Gorget' Large Armor Repairer"
    },
    {
        "id": 11503200013,
        "name": "Imperial Navy Large Armor Repairer"
    },
    {
        "id": 11503200014,
        "name": "Federation Navy Large Armor Repairer"
    },
    {
        "id": 11503200021,
        "name": "'Chivalry' Large Armor Repairer"
    },
    {
        "id": 11503200024,
        "name": "Corpus C-Type Large Armor Repairer"
    },
    {
        "id": 11503200025,
        "name": "Core C-Type Large Armor Repairer"
    },
    {
        "id": 11506000002,
        "name": "MK1 Heat Sink"
    },
    {
        "id": 11506000004,
        "name": "MK3 Heat Sink"
    },
    {
        "id": 11506000006,
        "name": "MK5 Heat Sink"
    },
    {
        "id": 11506000008,
        "name": "MK7 Heat Sink"
    },
    {
        "id": 11506000010,
        "name": "MK9 Heat Sink"
    },
    {
        "id": 11506000012,
        "name": "Basic Heat Sink"
    },
    {
        "id": 11506000013,
        "name": "Imperial Navy Heat Sink"
    },
    {
        "id": 11506000017,
        "name": "True Sansha Heat Sink"
    },
    {
        "id": 11506000018,
        "name": "Dark Blood Heat Sink"
    },
    {
        "id": 11506000021,
        "name": "'Judgement' Heat Sink"
    },
    {
        "id": 11506000024,
        "name": "Centum C-Type Heat Sink"
    },
    {
        "id": 11506000025,
        "name": "Corpum C-Type Heat Sink"
    },
    {
        "id": 11510000002,
        "name": "MK1 Magnetic Field Stabilizer"
    },
    {
        "id": 11510000004,
        "name": "MK3 Magnetic Field Stabilizer"
    },
    {
        "id": 11510000006,
        "name": "MK5 Magnetic Field Stabilizer"
    },
    {
        "id": 11510000008,
        "name": "MK7 Magnetic Field Stabilizer"
    },
    {
        "id": 11510000010,
        "name": "MK9 Magnetic Field Stabilizer"
    },
    {
        "id": 11510000012,
        "name": "Basic Magnetic Field Stabilizer"
    },
    {
        "id": 11510000013,
        "name": "Federation Navy Magnetic Field Stabilizer"
    },
    {
        "id": 11510000021,
        "name": "Narcotics Magnetic Field Stabilizer"
    },
    {
        "id": 11510000024,
        "name": "Corelum C-Type Magnetic Field Stabilizer"
    },
    {
        "id": 11511000002,
        "name": "MK1 Warp Core Stabilizer"
    },
    {
        "id": 11511000004,
        "name": "MK3 Warp Core Stabilizer"
    },
    {
        "id": 11511000006,
        "name": "MK5 Warp Core Stabilizer"
    },
    {
        "id": 11511000008,
        "name": "MK7 Warp Core Stabilizer"
    },
    {
        "id": 11511000010,
        "name": "MK9 Warp Core Stabilizer"
    },
    {
        "id": 11511000012,
        "name": "'Aura' Warp Core Stabilizer"
    },
    {
        "id": 11511000021,
        "name": "'Natura' Warp Core Stabilizer"
    },
    {
        "id": 11513100006,
        "name": "MK5 Adaptive Armor Hardener"
    },
    {
        "id": 11513100008,
        "name": "MK7 Adaptive Armor Hardener"
    },
    {
        "id": 11513100010,
        "name": "MK9 Adaptive Armor Hardener"
    },
    {
        "id": 11513100012,
        "name": "'Pilfer' Adaptive Armor Hardener"
    },
    {
        "id": 11513100013,
        "name": "Imperial Navy Adaptive Armor Hardener"
    },
    {
        "id": 11513100014,
        "name": "Federation Navy Adaptive Armor Hardener"
    },
    {
        "id": 11513100018,
        "name": "Dark Blood Adaptive Armor Hardener"
    },
    {
        "id": 11513100019,
        "name": "Shadow Serpentis Adaptive Armor Hardener"
    },
    {
        "id": 11513100021,
        "name": "'Sparkly' Adaptive Armor Hardener"
    },
    {
        "id": 11513100024,
        "name": "Corpus C-Type Adaptive Armor Hardener"
    },
    {
        "id": 11513100025,
        "name": "Core C-Type Adaptive Armor Hardener"
    },
    {
        "id": 11514100002,
        "name": "MK1 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514100004,
        "name": "MK3 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514100006,
        "name": "MK5 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514100008,
        "name": "MK7 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514100010,
        "name": "MK9 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514100012,
        "name": "'Abatis' 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514100013,
        "name": "Imperial Navy 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514100014,
        "name": "Federation Navy 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514100021,
        "name": "'Fort' 100mm Reinforced Steel Plate"
    },
    {
        "id": 11514200004,
        "name": "MK3 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514200006,
        "name": "MK5 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514200008,
        "name": "MK7 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514200010,
        "name": "MK9 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514200012,
        "name": "'Abatis' 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514200013,
        "name": "Imperial Navy 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514200014,
        "name": "Federation Navy 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514200017,
        "name": "Dark Blood 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514200021,
        "name": "'Citadella' 200mm Reinforced Steel Plate"
    },
    {
        "id": 11514300006,
        "name": "MK5 400mm Reinforced Steel Plate"
    },
    {
        "id": 11514300008,
        "name": "MK7 400mm Reinforced Steel Plate"
    },
    {
        "id": 11514300010,
        "name": "MK9 400mm Reinforced Steel Plate"
    },
    {
        "id": 11514300012,
        "name": "'Bastion' 400mm Reinforced Steel Plate"
    },
    {
        "id": 11514300013,
        "name": "Imperial Navy 400mm Reinforced Steel Plate"
    },
    {
        "id": 11514300014,
        "name": "Federation Navy 400mm Reinforced Steel Plate"
    },
    {
        "id": 11514300021,
        "name": "Hansen 400mm Reinforced Steel Plate"
    },
    {
        "id": 11514400006,
        "name": "MK5 800mm Reinforced Steel Plate"
    },
    {
        "id": 11514400008,
        "name": "MK7 800mm Reinforced Steel Plate"
    },
    {
        "id": 11514400010,
        "name": "MK9 800mm Reinforced Steel Plate"
    },
    {
        "id": 11514400012,
        "name": "'Bastion' 800mm Reinforced Steel Plate"
    },
    {
        "id": 11514400013,
        "name": "Imperial Navy 800mm Reinforced Steel Plate"
    },
    {
        "id": 11514400014,
        "name": "Federation Navy 800mm Reinforced Steel Plate"
    },
    {
        "id": 11514400017,
        "name": "Dark Blood 800mm Reinforced Steel Plate"
    },
    {
        "id": 11514400021,
        "name": "'Hansen' 800mm Reinforced Steel Plate"
    },
    {
        "id": 11514500010,
        "name": "MK9 1600mm Reinforced Steel Plate"
    },
    {
        "id": 11514500012,
        "name": "'Bailey' 1600mm Reinforced Steel Plate"
    },
    {
        "id": 11514500013,
        "name": "Imperial Navy 1600mm Reinforced Steel Plate"
    },
    {
        "id": 11514500014,
        "name": "Federation Navy 1600mm Reinforced Steel Plate"
    },
    {
        "id": 11514500017,
        "name": "Dark Blood 1600mm Reinforced Steel Plate"
    },
    {
        "id": 11514500021,
        "name": "'Core' 1600mm Reinforced Steel Plate"
    },
    {
        "id": 11516000002,
        "name": "MK1 Ballistic Control System"
    },
    {
        "id": 11516000004,
        "name": "MK3 Ballistic Control System"
    },
    {
        "id": 11516000006,
        "name": "MK5 Ballistic Control System"
    },
    {
        "id": 11516000008,
        "name": "MK7 Ballistic Control System"
    },
    {
        "id": 11516000010,
        "name": "MK9 Ballistic Control System"
    },
    {
        "id": 11516000012,
        "name": "Full Duplex Ballistic Control System"
    },
    {
        "id": 11516000013,
        "name": "Caldari Navy Ballistic Control System"
    },
    {
        "id": 11516000014,
        "name": "Republic Fleet Ballistic Control System"
    },
    {
        "id": 11516000017,
        "name": "Dread Guristas Ballistic Control System"
    },
    {
        "id": 11516000018,
        "name": "Domination Ballistic Control System"
    },
    {
        "id": 11516000021,
        "name": "'Ironblood' Damage Control System"
    },
    {
        "id": 11516000024,
        "name": "Pithum C-Type Ballistic Control System"
    },
    {
        "id": 11519000004,
        "name": "MK3 Drone Damage Amplifier"
    },
    {
        "id": 11519000006,
        "name": "MK5 Drone Damage Amplifier"
    },
    {
        "id": 11519000008,
        "name": "MK7 Drone Damage Amplifier"
    },
    {
        "id": 11519000010,
        "name": "MK9 Drone Damage Amplifier"
    },
    {
        "id": 11519000012,
        "name": "Bat Drone Damage Amplifier"
    },
    {
        "id": 11519000013,
        "name": "Imperial Navy Drone Damage Amplifier"
    },
    {
        "id": 11519000014,
        "name": "Federation Navy Drone Damage Amplifier"
    },
    {
        "id": 11519000017,
        "name": "Dread Guristas Drone Damage Amplifier"
    },
    {
        "id": 11519000018,
        "name": "Sentient Drone Damage Amplifier"
    },
    {
        "id": 11519000021,
        "name": "'Nestworm' Drone Damage Amplifier"
    },
    {
        "id": 11520000004,
        "name": "MK3 Inertial Stabilizer"
    },
    {
        "id": 11520000006,
        "name": "MK5 Inertial Stabilizer"
    },
    {
        "id": 11520000008,
        "name": "MK7 Inertial Stabilizer"
    },
    {
        "id": 11520000010,
        "name": "MK9 Inertial Stabilizer"
    },
    {
        "id": 11520000012,
        "name": "Basic Inertial Stabilizer"
    },
    {
        "id": 11520000013,
        "name": "Federation Navy Inertial Stabilizer"
    },
    {
        "id": 11520000014,
        "name": "Republic Fleet Inertial Stabilizer"
    },
    {
        "id": 11520000017,
        "name": "Shadow Serpentis Inertial Stabilizer"
    },
    {
        "id": 11520000021,
        "name": "Synthetic Hull Inertial Stabilizer"
    },
    {
        "id": 11529000002,
        "name": "MK1 Reactive Armor Hardener"
    },
    {
        "id": 11529000004,
        "name": "MK3 Reactive Armor Hardener"
    },
    {
        "id": 11529000006,
        "name": "MK5 Reactive Armor Hardener"
    },
    {
        "id": 11529000008,
        "name": "MK7 Reactive Armor Hardener"
    },
    {
        "id": 11529000010,
        "name": "MK9 Reactive Armor Hardener"
    },
    {
        "id": 11529000012,
        "name": "'Moat' Reactive Armor Hardener"
    },
    {
        "id": 11529000013,
        "name": "Imperial Navy Reactive Armor Hardener"
    },
    {
        "id": 11529000014,
        "name": "Federation Navy Reactive Armor Hardener"
    },
    {
        "id": 11529000017,
        "name": "Dark Blood Reactive Armor Hardener"
    },
    {
        "id": 11529000018,
        "name": "Shadow Serpentis Reactive Armor Hardener"
    },
    {
        "id": 11529000021,
        "name": "'Sparkly' Reactive Armor Hardener"
    },
    {
        "id": 11529000024,
        "name": "Corpum C-Type Reactive Armor Hardener"
    },
    {
        "id": 11529000025,
        "name": "Corelum C-Type Reactive Armor Hardener"
    },
    {
        "id": 11536000002,
        "name": "MK1 Reactive Shield Hardener"
    },
    {
        "id": 11536000004,
        "name": "MK3 Reactive Shield Hardener"
    },
    {
        "id": 11536000006,
        "name": "MK5 Reactive Shield Hardener"
    },
    {
        "id": 11536000008,
        "name": "MK7 Reactive Shield Hardener"
    },
    {
        "id": 11536000010,
        "name": "MK9 Reactive Shield Hardener"
    },
    {
        "id": 11536000012,
        "name": "Challenger Reactive Shield Hardener"
    },
    {
        "id": 11536000013,
        "name": "Caldari Navy Reactive Shield Hardener"
    },
    {
        "id": 11536000014,
        "name": "Republic Fleet Reactive Shield Hardener"
    },
    {
        "id": 11536000017,
        "name": "True Sansha Reactive Shield Hardener"
    },
    {
        "id": 11536000018,
        "name": "Dread Guristas Reactive Shield Hardener"
    },
    {
        "id": 11536000019,
        "name": "Domination Reactive Shield Hardener"
    },
    {
        "id": 11536000021,
        "name": "'Enterprise' Reactive Shield Hardener"
    },
    {
        "id": 11536000024,
        "name": "Pithum C-Type Reactive Shield Hardener"
    },
    {
        "id": 11536000025,
        "name": "Gistum C-Type Reactive Shield Hardener"
    },
    {
        "id": 11537000006,
        "name": "MK5 Small Shield Field Module"
    },
    {
        "id": 11537000008,
        "name": "MK7 Small Shield Field Module"
    },
    {
        "id": 11537000010,
        "name": "MK9 Small Shield Field Module"
    },
    {
        "id": 11537000012,
        "name": "'Crucible' Small Shield Field Module"
    },
    {
        "id": 11537000013,
        "name": "Caldari Navy Small Shield Field Module"
    },
    {
        "id": 11537000014,
        "name": "Republic Fleet Small Shield Field Module"
    },
    {
        "id": 11537000021,
        "name": "'Mirror' Small Shield Field Module"
    },
    {
        "id": 11537000024,
        "name": "Pithi C-Type Small Shield Field Module"
    },
    {
        "id": 11537000025,
        "name": "Gistii C-Type Small Shield Field Module"
    },
    {
        "id": 11537100006,
        "name": "MK5 Medium Shield Field Module"
    },
    {
        "id": 11537100008,
        "name": "MK7 Medium Shield Field Module"
    },
    {
        "id": 11537100010,
        "name": "MK9 Medium Shield Field Module"
    },
    {
        "id": 11537100012,
        "name": "'Crucible' Medium Shield Field Module"
    },
    {
        "id": 11537100013,
        "name": "Caldari Navy Medium Shield Field Module"
    },
    {
        "id": 11537100014,
        "name": "Republic Fleet Medium Shield Field Module"
    },
    {
        "id": 11537100021,
        "name": "'Mirror' Medium Shield Field Module"
    },
    {
        "id": 11537100024,
        "name": "Pithum C-Type Medium Shield Field Module"
    },
    {
        "id": 11537100025,
        "name": "Gistum C-Type Medium Shield Field Module"
    },
    {
        "id": 11537200008,
        "name": "MK7 Large Shield Field Module"
    },
    {
        "id": 11537200010,
        "name": "MK9 Large Shield Field Module"
    },
    {
        "id": 11537200012,
        "name": "'Crucible' Large Shield Field Module"
    },
    {
        "id": 11537200013,
        "name": "Caldari Navy Large Shield Field Module"
    },
    {
        "id": 11537200021,
        "name": "'Mirror' Large Shield Field Module"
    },
    {
        "id": 11537200024,
        "name": "Pith C-Type Large Shield Field Module"
    },
    {
        "id": 11537200025,
        "name": "Gist C-Type Large Shield Field Module"
    },
    {
        "id": 11538000006,
        "name": "MK5 Small Armor Link Module"
    },
    {
        "id": 11538000008,
        "name": "MK7 Small Armor Link Module"
    },
    {
        "id": 11538000010,
        "name": "MK9 Small Armor Link Module"
    },
    {
        "id": 11538000012,
        "name": "'Hustler' Small Armor Link Module"
    },
    {
        "id": 11538000013,
        "name": "Imperial Navy Small Armor Link Module"
    },
    {
        "id": 11538000021,
        "name": "'Bloodline' Small Armor Link Module"
    },
    {
        "id": 11538000024,
        "name": "Corpii C-Type Small Armor Link Module"
    },
    {
        "id": 11538000025,
        "name": "Coreli C-Type Small Armor Link Module"
    },
    {
        "id": 11538100006,
        "name": "MK5 Medium Armor Link Module"
    },
    {
        "id": 11538100008,
        "name": "MK7 Medium Armor Link Module"
    },
    {
        "id": 11538100010,
        "name": "MK9 Medium Armor Link Module"
    },
    {
        "id": 11538100012,
        "name": "'Hustler' Medium Armor Link Module"
    },
    {
        "id": 11538100021,
        "name": "'Bloodline' Medium Armor Link Module"
    },
    {
        "id": 11538100024,
        "name": "Corpum C-Type Medium Armor Link Module"
    },
    {
        "id": 11538100025,
        "name": "Corelum C-Type Medium Armor Link Module"
    },
    {
        "id": 11538200008,
        "name": "MK7 Large Armor Link Module"
    },
    {
        "id": 11538200010,
        "name": "MK9 Large Armor Link Module"
    },
    {
        "id": 11538200012,
        "name": "'Hustler' Large Armor Link Module"
    },
    {
        "id": 11538200021,
        "name": "'Bloodline' Large Armor Link Module"
    },
    {
        "id": 11538200024,
        "name": "Corpus C-Type Large Armor Link Module"
    },
    {
        "id": 11538200025,
        "name": "Core C-Type Large Armor Link Module"
    },
    {
        "id": 11539000006,
        "name": "MK5 Small Group Shield Booster"
    },
    {
        "id": 11539000008,
        "name": "MK7 Small Group Shield Booster"
    },
    {
        "id": 11539000010,
        "name": "MK9 Small Group Shield Booster"
    },
    {
        "id": 11539000012,
        "name": "'Settler' Small Group Shield Booster"
    },
    {
        "id": 11539000021,
        "name": "'Bannerman' Small Group Shield Booster"
    },
    {
        "id": 11539100006,
        "name": "MK5 Medium Group Shield Booster"
    },
    {
        "id": 11539100008,
        "name": "MK7 Medium Group Shield Booster"
    },
    {
        "id": 11539100010,
        "name": "MK9 Medium Group Shield Booster"
    },
    {
        "id": 11539100012,
        "name": "'Settler' Medium Group Shield Booster"
    },
    {
        "id": 11539100013,
        "name": "Caldari Navy Medium Group Shield Booster"
    },
    {
        "id": 11539100014,
        "name": "Republic Fleet Medium Group Shield Booster"
    },
    {
        "id": 11539100021,
        "name": "'Bannerman' Medium Group Shield Booster"
    },
    {
        "id": 11539200008,
        "name": "MK7 Large Group Shield Booster"
    },
    {
        "id": 11539200010,
        "name": "MK9 Large Group Shield Booster"
    },
    {
        "id": 11539200012,
        "name": "'Settler' Large Group Shield Booster"
    },
    {
        "id": 11539200013,
        "name": "Caldari Navy Large Group Shield Booster"
    },
    {
        "id": 11539200014,
        "name": "Republic Fleet Large Group Shield Booster"
    },
    {
        "id": 11539200017,
        "name": "True Sansha Large Group Shield Booster"
    },
    {
        "id": 11539200018,
        "name": "Dread Guristas Large Group Shield Booster"
    },
    {
        "id": 11539200021,
        "name": "'Bannerman' Large Group Shield Booster"
    },
    {
        "id": 11540000006,
        "name": "MK5 Small Group Armor Repairer"
    },
    {
        "id": 11540000008,
        "name": "MK7 Small Group Armor Repairer"
    },
    {
        "id": 11540000010,
        "name": "MK9 Small Group Armor Repairer"
    },
    {
        "id": 11540000012,
        "name": "'Repairman' Small Group Armor Repairer"
    },
    {
        "id": 11540000013,
        "name": "Imperial Navy Small Group Armor Repairer"
    },
    {
        "id": 11540000021,
        "name": "'Engineer' Small Group Armor Repairer"
    },
    {
        "id": 11540100006,
        "name": "MK5 Medium Group Armor Repairer"
    },
    {
        "id": 11540100008,
        "name": "MK7 Medium Group Armor Repairer"
    },
    {
        "id": 11540100010,
        "name": "MK9 Medium Group Armor Repairer"
    },
    {
        "id": 11540100012,
        "name": "'Repairman' Medium Group Armor Repairer"
    },
    {
        "id": 11540100013,
        "name": "Imperial Navy Medium Group Armor Repairer"
    },
    {
        "id": 11540100014,
        "name": "Federation Navy Medium Group Armor Repairer"
    },
    {
        "id": 11540100021,
        "name": "'Engineer' Medium Group Armor Repairer"
    },
    {
        "id": 11540200008,
        "name": "MK7 Large Group Armor Repairer"
    },
    {
        "id": 11540200010,
        "name": "MK9 Large Group Armor Repairer"
    },
    {
        "id": 11540200012,
        "name": "'Repairman' Large Group Armor Repairer"
    },
    {
        "id": 11540200021,
        "name": "'Engineer' Large Group Armor Repairer"
    },
    {
        "id": 11541000006,
        "name": "MK5 Small Group Capacitor Transmitter"
    },
    {
        "id": 11541000008,
        "name": "MK7 Small Group Capacitor Transmitter"
    },
    {
        "id": 11541000010,
        "name": "MK9 Small Group Capacitor Transmitter"
    },
    {
        "id": 11541000012,
        "name": "'Ghost' Small Group Capacitor Transmitter"
    },
    {
        "id": 11541000013,
        "name": "Imperial Navy Small Group Capacitor Transmitter"
    },
    {
        "id": 11541000021,
        "name": "'Prayer' Small Group Capacitor Transmitter"
    },
    {
        "id": 11541000024,
        "name": "Centii C-Type Small Group Capacitor Transmitter"
    },
    {
        "id": 11541100006,
        "name": "MK5 Medium Group Capacitor Transmitter"
    },
    {
        "id": 11541100008,
        "name": "MK7 Medium Group Capacitor Transmitter"
    },
    {
        "id": 11541100010,
        "name": "MK9 Medium Group Capacitor Transmitter"
    },
    {
        "id": 11541100012,
        "name": "'Ghost' Medium Group Capacitor Transmitter"
    },
    {
        "id": 11541100024,
        "name": "Centum C-Type Medium Group Capacitor Transmitter"
    },
    {
        "id": 11541200008,
        "name": "MK7 Large Group Capacitor Transmitter"
    },
    {
        "id": 11541200010,
        "name": "MK9 Large Group Capacitor Transmitter"
    },
    {
        "id": 11541200012,
        "name": "'Ghost' Large Group Capacitor Transmitter"
    },
    {
        "id": 11541200021,
        "name": "'Prayer' Large Group Capacitor Transmitter"
    },
    {
        "id": 11541200024,
        "name": "Centum C-Type Large Group Capacitor Transmitter"
    },
    {
        "id": 11542000012,
        "name": "'The Returned' Macro Particle Stabilizer"
    },
    {
        "id": 11542000013,
        "name": "Yan-Jung Macro Particle Stabilizer"
    },
    {
        "id": 11542000017,
        "name": "'The Departed' Macro Particle Stabilizer"
    },
    {
        "id": 11542000021,
        "name": "'The Sacrificed' Macro Particle Stabilizer"
    },
    {
        "id": 11542000024,
        "name": "'Wei' C Macro Particle Stabilizer"
    }
]

export default itemIdentifiers;
