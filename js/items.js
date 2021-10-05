items = [
  { // 0 -- DARKBURGER
    name       : "DarkBurger",
    krishp     : 70,
    susiehp    : 70,
    ralseihp   : 70,
    revive     : 0,
    tp         : 0,
    replace    : "none",
    desc       : ['Heals', '70HP'],
    usetext    : ['* $USER$ used the DARKBURGER!'],
    target     : "single"
  },
  
  { // 1 -- LIGHTBURGER
    name       : "LightBurger",
    krishp     : 150,
    susiehp    : 160,
    ralseihp   : -999,
    revive     : 0,
    tp         : 0,
    replace    : "none",
    desc       : ['Healing', 'varies'],
    usetext    : ['* $USER$ used the LIGHTBURGER!'],
    target     : "single"
  },
  
  { // 2 -- DD-BURGER
    name       : "DD-Burger",
    krishp     : 60,
    susiehp    : 60,
    ralseihp   : 60,
    revive     : 0,
    tp         : 0,
    replace    : "darkburger",
    desc       : ['Heals', '60HP', '2x'],
    usetext    : ['* $USER$ used the DD-BURGER!'],
    target     : "single"
  },
  
  { // 3 -- REVIVEMINT
    name       : "ReviveMint",
    krishp     : 0,
    susiehp    : 0,
    ralseihp   : 0,
    revive     : 0,
    tp         : 0,
    replace    : "none",
    desc       : ['Heal','Downed','Ally'],
    usetext    : ['* $USER$ used the REVIVEMINT!'],
    target     : "single"
  },
  
  { // 4 -- REVIVEDUST
    name       : "ReviveDust",
    krishp     : 0,
    susiehp    : 0,
    ralseihp   : 0,
    revive     : 0.25,
    tp         : 0,
    replace    : "none",
    desc       : ['Revives','Team','25%'],
    usetext    : ['* $USER$ used the REVIVEDUST!'],
    target     : "party"
  },
  
  { // 5 -- REVIVEBRITE
    name       : "ReviveBrite",
    krishp     : 0,
    susiehp    : 0,
    ralseihp   : 0,
    revive     : 1,
    tp         : 0,
    replace    : "none",
    desc       : ['Revives','Team','100%'],
    usetext    : ['* $USER$ used the REVIVEBRITE!'],
    target     : "party"
  },
  
  { // 6 -- TENSIONBIT
    name       : "TensionBit",
    krishp     : 0,
    susiehp    : 0,
    ralseihp   : 0,
    revive     : 0,
    tp         : 32,
    replace    : "none",
    desc       : ['Raises','TP','32%'],
    usetext    : ['* $USER$ used the TENSIONBIT!'],
    target     : "single"
  },
  
  { // 7 -- TENSIONGEM
    name       : "TensionGem",
    krishp     : 0,
    susiehp    : 0,
    ralseihp   : 0,
    revive     : 0,
    tp         : 50,
    replace    : "none",
    desc       : ['Raises','TP','50%'],
    usetext    : ['* $USER$ used the TENSIONGEM!'],
    target     : "single"
  },
  
  { // 8 -- TENSIONMAX
    name       : "TensionMax",
    krishp     : 0,
    susiehp    : 0,
    ralseihp   : 0,
    revive     : 0,
    tp         : 100,
    replace    : "none",
    desc       : ['Raises','TP','Max'],
    usetext    : ['* $USER$ used the TENSIONMAX!'],
    target     : "party"
  },
  
  { // 9 -- TENSIONCOLA
    name       : "TensionCola",
    krishp     : 20,
    susiehp    : 20,
    ralseihp   : 20,
    revive     : 0,
    tp         : 32,
    replace    : "none",
    desc       : ['Raise','HP And','TP'],
    usetext    : ['* $USER$ used the TENSIONCOLA!'],
    target     : "party"
  },
  
  { // 10 -- SLICEDBACON
    name       : "SlicedBacon",
    krishp     : 80,
    susiehp    : 100,
    ralseihp   : 60,
    revive     : 0,
    tp         : 32,
    replace    : "none",
    desc       : ['Healing','varies'],
    usetext    : ['* $USER$ used the SLICED BACON!'],
    target     : "single"
  },
];
