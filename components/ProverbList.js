
const Shuffle = require('shuffle-array')

PROVERBS = [
  {
    id: 1,
    proverb: "let the wise listen and add to their learning, and let the discerning get guidance—for understanding proverbs and parables, the sayings and riddles of the wise."
  },
  {
    id: 2,
    proverb: "The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction."
  },
  {
    id: 3,
    proverb: "Listen, my son, to your father's instruction and do not forsake your mother's teaching. They are a garland to grace your head and a chain to adorn your neck."
  },
  {
    id: 4,
    proverb: "My son, if sinful men entice you, do not give in to them. If they say, “Come along with us; let's lie in wait for innocent blood, let's ambush some harmless soul; let's swallow them alive, like the grave, and whole, like those who go down to the pit; we will get all sorts of valuable things and fill our houses with plunder; cast lots with us; we will all share the loot”— my son, do not go along with them, do not set foot on their paths; for their feet rush into evil,    they are swift to shed blood."
  },
  {
    id: 5,
    proverb: "How useless to spread a net where every bird can see it!"
  },
  {
    id: 6,
    proverb: "These men lie in wait for their own blood; they ambush only themselves! Such are the paths of all who go after ill- gotten gain; it takes away the life of those who get it."
  },
  {
    id: 7,
    proverb: "Out in the open wisdom calls aloud, she raises her voice in the public square; on top of the wall she cries out, at the city gate she makes her speech:"
  },
  {
    id: 8,
    proverb: "How long will you who are simple love your simple ways? How long will mockers delight in mockery and fools hate knowledge?"
  },
  {
    id: 9,
    proverb: "Repent at my rebuke! Then I will pour out my thoughts to you, I will make known to you my teachings. But since you refuse to listen when I call and no one pays attention when I stretch out my hand, since you disregard all my advice and do not accept my rebuke, I in turn will laugh when disaster strikes you; I will mock when calamity overtakes you— when calamity overtakes you like a storm, when disaster sweeps over you like a whirlwind, when distress and trouble overwhelm you."
  },
  {
    id: 10,
    proverb: "Then they will call to me but I will not answer; they will look for me but will not find me, since they hated knowledge and did not choose to fear the Lord. Since they would not accept my advice and spurned my rebuke, they will eat the fruit of their ways and be filled with the fruit of their schemes."
  },
  {
    id: 11,
    proverb: "For the waywardness of the simple will kill them, and the complacency of fools will destroy them; but whoever listens to me will live in safety and be at ease, without fear of harm."
  },
  {
    id: 12,
    proverb: "My son, if you accept my words and store up my commands within you, turning your ear to wisdom and applying your heart to understanding— indeed, if you call out for insight and cry aloud for understanding, and if you look for it as for silver and search for it as for hidden treasure, then you will understand the fear of the Lord and find the knowledge of God."
  },
  {
    id: 13,
    proverb: "For the Lord gives wisdom; from his mouth come knowledge and understanding. He holds success in store for the upright, he is a shield to those whose walk is blameless, for he guards the course of the just and protects the way of his faithful ones."
  },
  {
    id: 14,
    proverb: "Then you will understand what is right and just and fair—every good path. For wisdom will enter your heart, and knowledge will be pleasant to your soul.Discretion will protect you, and understanding will guard you."
  },
  {
    id: 15,
    proverb: "Wisdom will save you from the ways of wicked men, from men whose words are perverse, who have left the straight paths to walk in dark ways, who delight in doing wrong and rejoice in the perverseness of evil, whose paths are crooked and who are devious in their ways."
  },
  {
    id: 16,
    proverb: "Wisdom will save you also from the adulterous woman, from the wayward woman with her seductive words, who has left the partner of her youth and ignored the covenant she made before God. Surely her house leads down to death and her paths to the spirits of the dead. None who go to her return or attain the paths of life."
  },
  {
    id: 17,
    proverb: "Thus you will walk in the ways of the good and keep to the paths of the righteous. For the upright will live in the land, and the blameless will remain in it; but the wicked will be cut off from the land, and the unfaithful will be torn from it."
  },
  {
    id: 18,
    proverb: "My son, do not forget my teaching, but keep my commands in your heart, for they will prolong your life many years and bring you peace and prosperity."
  },
  {
    id: 19,
    proverb: "Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart. Then you will win favor and a good name in the sight of God and man."
  },
  {
    id: 20,
    proverb: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
  },
  {
    id: 21,
    proverb: "Do not be wise in your own eyes; fear the Lord and shun evil. This will bring health to your body and nourishment to your bones."
  },
  {
    id: 22,
    proverb: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine."
  },
  {
    id: 23,
    proverb: "My son, do not despise the Lord's discipline, and do not resent his rebuke, because the Lord disciplines those he loves, as a father the son he delights in."
  },
  {
    id: 24,
    proverb: "Blessed are those who find wisdom, those who gain understanding, for she is more profitable than silver and yields better returns than gold. She is more precious than rubies; nothing you desire can compare with her. Long life is in her right hand; in her left hand are riches and honor. Her ways are pleasant ways, and all her paths are peace. She is a tree of life to those who take hold of her; those who hold her fast will be blessed."
  },
  {
    id: 25,
    proverb: "By wisdom the Lord laid the earth's foundations, by understanding he set the heavens in place; by his knowledge the watery depths were divided, and the clouds let drop the dew."
  },
  {
    id: 26,
    proverb: "My son, do not let wisdom and understanding out of your sight, preserve sound judgment and discretion; they will be life for you, an ornament to grace your neck. Then you will go on your way in safety, and your foot will not stumble. When you lie down, you will not be afraid; when you lie down, your sleep will be sweet. Have no fear of sudden disaster or of the ruin that overtakes the wicked, for the Lord will be at your side and will keep your foot from being snared."
  },
  {
    id: 27,
    proverb: "Do not withhold good from those to whom it is due, when it is in your power to act. Do not say to your neighbor, “Come back tomorrow and I'll give it to you”— when you already have it with you."
  },
  {
    id: 28,
    proverb: "Do not plot harm against your neighbor, who lives trustfully near you."
  },
  {
    id: 29,
    proverb: "Do not accuse anyone for no reason— when they have done you no harm."
  },
  {
    id: 30,
    proverb: "Do not envy the violent or choose any of their ways. For the Lord detests the perverse but takes the upright into his confidence."
  },
  {
    id: 31,
    proverb: "The Lord's curse is on the house of the wicked, but he blesses the home of the righteous. He mocks proud mockers but shows favor to the humble and oppressed."
  },
  {
    id: 32,
    proverb: "The wise inherit honor, but fools get only shame."
  },
  {
    id: 33,
    proverb: "Listen, my sons, to a father's instruction; pay attention and gain understanding. I give you sound learning, so do not forsake my teaching. For I too was a son to my father, still tender, and cherished by my mother. Then he taught me, and he said to me, “Take hold of my words with all your heart; keep my commands, and you will live."
  },
  {
    id: 34,
    proverb: "Get wisdom, get understanding; do not forget my words or turn away from them."
  },
  {
    id: 35,
    proverb: "Do not forsake wisdom, and she will protect you; love her, and she will watch over you."
  },
  {
    id: 36,
    proverb: "The beginning of wisdom is this: Get wisdom. Though it cost all you have, get understanding. Cherish her, and she will exalt you; embrace her, and she will honor you. She will give you a garland to grace your head and present you with a glorious crown.”"
  },
  {
    id: 37,
    proverb: "Listen, my son, accept what I say, and the years of your life will be many."
  },
  {
    id: 38,
    proverb: "I instruct you in the way of wisdom and lead you along straight paths. When you walk, your steps will not be hampered; when you run, you will not stumble."
  },
  {
    id: 39,
    proverb: "Hold on to instruction, do not let it go; guard it well, for it is your life."
  },
  {
    id: 40,
    proverb: "Do not set foot on the path of the wicked or walk in the way of evildoers. Avoid it, do not travel on it; turn from it and go on your way. For they cannot rest until they do evil; they are robbed of sleep till they make someone stumble. They eat the bread of wickedness and drink the wine of violence."
  },
  {
    id: 41,
    proverb: "The path of the righteous is like the morning sun, shining ever brighter till the full light of day. But the way of the wicked is like deep darkness;    they do not know what makes them stumble."
  },
  {
    id: 42,
    proverb: "My son, pay attention to what I say; turn your ear to my words. Do not let them out of your sight, keep them within your heart; for they are life to those who find them and health to one's whole body."
  },
  {
    id: 43,
    proverb: "Above all else, guard your heart, for everything you do flows from it."
  },
  {
    id: 44,
    proverb: "Keep your mouth free of perversity; keep corrupt talk far from your lips."
  },
  {
    id: 45,
    proverb: "Let your eyes look straight ahead; fix your gaze directly before you."
  },
  {
    id: 46,
    proverb: "Give careful thought to the paths for your feet and be steadfast in all your ways. Do not turn to the right or the left; keep your foot from evil."
  },
  {
    id: 47,
    proverb: "My son, pay attention to my wisdom, turn your ear to my words of insight, that you may maintain discretion and your lips may preserve knowledge."
  },
  {
    id: 48,
    proverb: "For the lips of the adulterous woman drip honey, and her speech is smoother than oil; but in the end she is bitter as gall, sharp as a double- edged sword. Her feet go down to death; her steps lead straight to the grave. She gives no thought to the way of life; her paths wander aimlessly, but she does not know it."
  },
  {
    id: 49,
    proverb: "Now then, my sons, listen to me; do not turn aside from what I say. Keep to a path far from her, do not go near the door of her house, lest you lose your honor to others and your dignity to one who is cruel, lest strangers feast on your wealth and your toil enrich the house of another."
  },
  {
    id: 50,
    proverb: "At the end of your life you will groan, when your flesh and body are spent. You will say, “How I hated discipline! How my heart spurned correction! I would not obey my teachers or turn my ear to my instructors. And I was soon in serious trouble in the assembly of God's people.”"
  },
  {
    id: 51,
    proverb: "Drink water from your own cistern, running water from your own well. Should your springs overflow in the streets, your streams of water in the public squares? Let them be yours alone, never to be shared with strangers."
  },
  {
    id: 52,
    proverb: "May your fountain be blessed, and may you rejoice in the wife of your youth. A loving doe, a graceful deer— may her breasts satisfy you always, may you ever be intoxicated with her love. Why, my son, be intoxicated with another man's wife? Why embrace the bosom of a wayward woman?"
  },
  {
    id: 53,
    proverb: "For your ways are in full view of the Lord, and he examines all your paths. The evil deeds of the wicked ensnare them; the cords of their sins hold them fast. For lack of discipline they will die, led astray by their own great folly."
  },
  {
    id: 54,
    proverb: "My son, if you have put up security for your neighbor, if you have shaken hands in pledge for a stranger, you have been trapped by what you said,    ensnared by the words of your mouth."
  },
  {
    id: 55,
    proverb: "So do this, my son, to free yourself, since you have fallen into your neighbor's hands: Go—to the point of exhaustion— and give your neighbor no rest! Allow no sleep to your eyes, no slumber to your eyelids. Free yourself, like a gazelle from the hand of the hunter, like a bird from the snare of the fowler."
  },
  {
    id: 56,
    proverb: "Go to the ant, you sluggard; consider its ways and be wise! It has no commander, no overseer or ruler, yet it stores its provisions in summer and gathers its food at harvest."
  },
  {
    id: 57,
    proverb: "How long will you lie there, you sluggard? When will you get up from your sleep? A little sleep, a little slumber, a little folding of the hands to rest— and poverty will come on you like a thief and scarcity like an armed man."
  },
  {
    id: 58,
    proverb: "A troublemaker and a villain, who goes about with a corrupt mouth, who winks maliciously with his eye, signals with his feet and motions with his fingers, who plots evil with deceit in his heart— he always stirs up conflict. Therefore disaster will overtake him in an instant; he will suddenly be destroyed—without remedy."
  },
  {
    id: 59,
    proverb: "There are six things the Lord hates, seven that are detestable to him: haughty eyes, a lying tongue, hands that shed innocent blood, a heart that devises wicked schemes, feet that are quick to rush into evil, a false witness who pours out lies and a person who stirs up conflict in the community."
  },
  {
    id: 60,
    proverb: "My son, keep your father's command and do not forsake your mother's teaching. Bind them always on your heart; fasten them around your neck. When you walk, they will guide you; when you sleep, they will watch over you; when you awake, they will speak to you. For this command is a lamp, this teaching is a light, and correction and instruction are the way to life, keeping you from your neighbor's wife, from the smooth talk of a wayward woman."
  },
  {
    id: 61,
    proverb: "Do not lust in your heart after her beauty or let her captivate you with her eyes. For a prostitute can be had for a loaf of bread, but another man's wife preys on your very life. Can a man scoop fire into his lap without his clothes being burned? Can a man walk on hot coals without his feet being scorched? So is he who sleeps with another man's wife; no one who touches her will go unpunished."
  },
  {
    id: 62,
    proverb: "People do not despise a thief if he steals to satisfy his hunger when he is starving. Yet if he is caught, he must pay sevenfold, though it costs him all the wealth of his house. But a man who commits adultery has no sense; whoever does so destroys himself. Blows and disgrace are his lot, and his shame will never be wiped away."
  },
  {
    id: 63,
    proverb: "For jealousy arouses a husband's fury, and he will show no mercy when he takes revenge. He will not accept any compensation; he will refuse a bribe, however great it is."
  },
  {
    id: 64,
    proverb: "My son, keep my words and store up my commands within you. Keep my commands and you will live; guard my teachings as the apple of your eye. Bind them on your fingers; write them on the tablet of your heart. Say to wisdom, “You are my sister,” and to insight, “You are my relative.” They will keep you from the adulterous woman, from the wayward woman with her seductive words."
  },
  {
    id: 65,
    proverb: "At the window of my house I looked down through the lattice. I saw among the simple, I noticed among the young men, a youth who had no sense. He was going down the street near her corner, walking along in the direction of her house at twilight, as the day was fading, as the dark of night set in. Then out came a woman to meet him, dressed like a prostitute and with crafty intent. (She is unruly and defiant, her feet never stay at home; now in the street, now in the squares, at every corner she lurks.) She took hold of him and kissed him and with a brazen face she said: “Today I fulfilled my vows, and I have food from my fellowship offering at home. So I came out to meet you; I looked for you and have found you! I have covered my bed with colored linens from Egypt. I have perfumed my bed with myrrh, aloes and cinnamon. Come, let's drink deeply of love till morning; let's enjoy ourselves with love! My husband is not at home; he has gone on a long journey. He took his purse filled with money and will not be home till full moon.” With persuasive words she led him astray; she seduced him with her smooth talk. All at once he followed her like an ox going to the slaughter, like a deer stepping into a noose till an arrow pierces his liver, like a bird darting into a snare,    little knowing it will cost him his life."
  },
  {
    id: 66,
    proverb: "Now then, my sons, listen to me; pay attention to what I say. Do not let your heart turn to her ways or stray into her paths. Many are the victims she has brought down; her slain are a mighty throng. Her house is a highway to the grave, leading down to the chambers of death."
  },
  {
    id: 67,
    proverb: "Does not wisdom call out? Does not understanding raise her voice? At the highest point along the way, where the paths meet, she takes her stand; beside the gate leading into the city, at the entrance, she cries aloud: “To you, O people, I call out; I raise my voice to all mankind. You who are simple, gain prudence;you who are foolish, set your hearts on it. Listen, for I have trustworthy things to say; I open my lips to speak what is right. My mouth speaks what is true,    for my lips detest wickedness. All the words of my mouth are just; none of them is crooked or perverse. To the discerning all of them are right; they are upright to those who have found knowledge. Choose my instruction instead of silver, knowledge rather than choice gold, for wisdom is more precious than rubies, and nothing you desire can compare with her."
  },
  {
    id: 68,
    proverb: "“I, wisdom, dwell together with prudence; I possess knowledge and discretion."
  },
  {
    id: 69,
    proverb: "To fear the Lord is to hate evil; I hate pride and arrogance, evil behavior and perverse speech."
  },
  {
    id: 70,
    proverb: "Counsel and sound judgment are mine; I have insight, I have power. By me kings reign and rulers issue decrees that are just; by me princes govern, and nobles—all who rule on earth. I love those who love me, and those who seek me find me. With me are riches and honor, enduring wealth and prosperity. My fruit is better than fine gold; what I yield surpasses choice silver. I walk in the way of righteousness, along the paths of justice, bestowing a rich inheritance on those who love me and making their treasuries full. “The Lord brought me forth as the first of his works, before his deeds of old;"
  },
  {
    id: 71,
    proverb: "[of wisdom] I was formed long ages ago, at the very beginning, when the world came to be. When there were no watery depths, I was given birth, when there were no springs overflowing with water; before the mountains were settled in place, before the hills, I was given birth, before he made the world or its fields or any of the dust of the earth. I was there when he set the heavens in place, when he marked out the horizon on the face of the deep, when he established the clouds above and fixed securely the fountains of the deep, when he gave the sea its boundary so the waters would not overstep his command, and when he marked out the foundations of the earth. Then I was constantly at his side. I was filled with delight day after day, rejoicing always in his presence, rejoicing in his whole world and delighting in mankind."
  },
  {
    id: 72,
    proverb: "“Now then, my children, listen to me; blessed are those who keep my ways. Listen to my instruction and be wise; do not disregard it."
  },
  {
    id: 73,
    proverb: "[of wisdom] Blessed are those who listen to me, watching daily at my doors, waiting at my doorway. For those who find me find life and receive favor from the Lord. But those who fail to find me harm themselves; all who hate me love death.”"
  },
  {
    id: 74,
    proverb: "Wisdom has built her house; she has set up its seven pillars. She has prepared her meat and mixed her wine; she has also set her table. She has sent out her servants, and she calls from the highest point of the city, “Let all who are simple come to my house!” To those who have no sense she says, “Come, eat my food and drink the wine I have mixed. Leave your simple ways and you will live; walk in the way of insight.”"
  },
  {
    id: 75,
    proverb: "Whoever corrects a mocker invites insults; whoever rebukes the wicked incurs abuse."
  },
  {
    id: 76,
    proverb: "Do not rebuke mockers or they will hate you; rebuke the wise and they will love you. Instruct the wise and they will be wiser still; teach the righteous and they will add to their learning."
  },
  {
    id: 77,
    proverb: "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding. For through wisdom your days will be many, and years will be added to your life."
  },
  {
    id: 78,
    proverb: "If you are wise, your wisdom will reward you; if you are a mocker, you alone will suffer."
  },
  {
    id: 79,
    proverb: "Folly is an unruly woman; she is simple and knows nothing. She sits at the door of her house, on a seat at the highest point of the city, calling out to those who pass by, who go straight on their way, “Let all who are simple come to my house!” To those who have no sense she says, “Stolen water is sweet; food eaten in secret is delicious!” But little do they know that the dead are there, that her guests are deep in the realm of the dead."
  },
  {
    id: 80,
    proverb: "The proverbs of Solomon: A wise son brings joy to his father, but a foolish son brings grief to his mother."
  },
  {
    id: 81,
    proverb: "Ill-gotten treasures have no lasting value, but righteousness delivers from death."
  },
  {
    id: 82,
    proverb: "The Lord does not let the righteous go hungry, but he thwarts the craving of the wicked."
  },
  {
    id: 83,
    proverb: "Lazy hands make for poverty, but diligent hands bring wealth."
  },
  {
    id: 84,
    proverb: "He who gathers crops in summer is a prudent son, but he who sleeps during harvest is a disgraceful son."
  },
  {
    id: 85,
    proverb: "Blessings crown the head of the righteous, but violence overwhelms the mouth of the wicked."
  },
  {
    id: 86,
    proverb: "The name of the righteous is used in blessings, but the name of the wicked will rot."
  },
  {
    id: 87,
    proverb: "The wise in heart accept commands, but a chattering fool comes to ruin."
  },
  {
    id: 88,
    proverb: "Whoever walks in integrity walks securely, but whoever takes crooked paths will be found out."
  },
  {
    id: 89,
    proverb: "Whoever winks maliciously causes grief, and a chattering fool comes to ruin."
  },
  {
    id: 90,
    proverb: "The mouth of the righteous is a fountain of life, but the mouth of the wicked conceals violence."
  },
  {
    id: 91,
    proverb: "Hatred stirs up conflict, but love covers over all wrongs."
  },
  {
    id: 92,
    proverb: "Wisdom is found on the lips of the discerning, but a rod is for the back of one who has no sense."
  },
  {
    id: 93,
    proverb: "The wise store up knowledge, but the mouth of a fool invites ruin."
  },
  {
    id: 94,
    proverb: "The wealth of the rich is their fortified city, but poverty is the ruin of the poor."
  },
  {
    id: 95,
    proverb: "The wages of the righteous is life, but the earnings of the wicked are sin and death."
  },
  {
    id: 96,
    proverb: "Whoever heeds discipline shows the way to life, but whoever ignores correction leads others astray."
  },
  {
    id: 97,
    proverb: "Whoever conceals hatred with lying lips and spreads slander is a fool."
  },
  {
    id: 98,
    proverb: "Sin is not ended by multiplying words, but the prudent hold their tongues."
  },
  {
    id: 99,
    proverb: "The tongue of the righteous is choice silver, but the heart of the wicked is of little value."
  },
  {
    id: 100,
    proverb: "The lips of the righteous nourish many, but fools die for lack of sense."
  },
  {
    id: 101,
    proverb: "The blessing of the Lord brings wealth, without painful toil for it."
  },
  {
    id: 102,
    proverb: "A fool finds pleasure in wicked schemes, but a person of understanding delights in wisdom."
  },
  {
    id: 103,
    proverb: "What the wicked dread will overtake them; what the righteous desire will be granted."
  },
  {
    id: 104,
    proverb: "When the storm has swept by, the wicked are gone, but the righteous stand firm forever."
  },
  {
    id: 105,
    proverb: "As vinegar to the teeth and smoke to the eyes, so are sluggards to those who send them."
  },
  {
    id: 106,
    proverb: "The fear of the Lord adds length to life, but the years of the wicked are cut short."
  },
  {
    id: 107,
    proverb: "The prospect of the righteous is joy, but the hopes of the wicked come to nothing."
  },
  {
    id: 108,
    proverb: "The way of the Lord is a refuge for the blameless, but it is the ruin of those who do evil."
  },
  {
    id: 109,
    proverb: "The righteous will never be uprooted, but the wicked will not remain in the land."
  },
  {
    id: 110,
    proverb: "From the mouth of the righteous comes the fruit of wisdom, but a perverse tongue will be silenced."
  },
  {
    id: 111,
    proverb: "The lips of the righteous know what finds favor, but the mouth of the wicked only what is perverse."
  },
  {
    id: 112,
    proverb: "The Lord detests dishonest scales, but accurate weights find favor with him."
  },
  {
    id: 113,
    proverb: "When pride comes, then comes disgrace, but with humility comes wisdom."
  },
  {
    id: 114,
    proverb: "The integrity of the upright guides them, but the unfaithful are destroyed by their duplicity."
  },
  {
    id: 115,
    proverb: "Wealth is worthless in the day of wrath, but righteousness delivers from death."
  },
  {
    id: 116,
    proverb: "The righteousness of the blameless makes their paths straight, but the wicked are brought down by their own wickedness."
  },
  {
    id: 117,
    proverb: "The righteousness of the upright delivers them, but the unfaithful are trapped by evil desires."
  },
  {
    id: 118,
    proverb: "Hopes placed in mortals die with them; all the promise of their power comes to nothing."
  },
  {
    id: 119,
    proverb: "The righteous person is rescued from trouble, and it falls on the wicked instead."
  },
  {
    id: 120,
    proverb: "With their mouths the godless destroy their neighbors, but through knowledge the righteous escape."
  },
  {
    id: 121,
    proverb: "When the righteous prosper, the city rejoices; when the wicked perish, there are shouts of joy."
  },
  {
    id: 122,
    proverb: "Through the blessing of the upright a city is exalted, but by the mouth of the wicked it is destroyed."
  },
  {
    id: 123,
    proverb: "Whoever derides their neighbor has no sense, but the one who has understanding holds their tongue."
  },
  {
    id: 124,
    proverb: "A gossip betrays a confidence, but a trustworthy person keeps a secret."
  },
  {
    id: 125,
    proverb: "For lack of guidance a nation falls, but victory is won through many advisers."
  },
  {
    id: 126,
    proverb: "Whoever puts up security for a stranger will surely suffer, but whoever refuses to shake hands in pledge is safe."
  },
  {
    id: 127,
    proverb: "A kindhearted woman gains honor, but ruthless men gain only wealth."
  },
  {
    id: 128,
    proverb: "Those who are kind benefit themselves, but the cruel bring ruin on themselves."
  },
  {
    id: 129,
    proverb: "A wicked person earns deceptive wages, but the one who sows righteousness reaps a sure reward."
  },
  {
    id: 130,
    proverb: "Truly the righteous attain life, but whoever pursues evil finds death."
  },
  {
    id: 131,
    proverb: "The Lord detests those whose hearts are perverse, but he delights in those whose ways are blameless."
  },
  {
    id: 132,
    proverb: "Be sure of this: The wicked will not go unpunished, but those who are righteous will go free. "
  },
  {
    id: 133,
    proverb: "Like a gold ring in a pig's snout is a beautiful woman who shows no discretion."
  },
  {
    id: 134,
    proverb: "The desire of the righteous ends only in good, but the hope of the wicked only in wrath."
  },
  {
    id: 135,
    proverb: "One person gives freely, yet gains even more; another withholds unduly, but comes to poverty."
  },
  {
    id: 136,
    proverb: "A generous person will prosper; whoever refreshes others will be refreshed."
  },
  {
    id: 137,
    proverb: "People curse the one who hoards grain, but they pray God's blessing on the one who is willing to sell."
  },
  {
    id: 138,
    proverb: "Whoever seeks good finds favor, but evil comes to one who searches for it."
  },
  {
    id: 139,
    proverb: "Those who trust in their riches will fall, but the righteous will thrive like a green leaf."
  },
  {
    id: 140,
    proverb: "Whoever brings ruin on their family will inherit only wind, and the fool will be servant to the wise."
  },
  {
    id: 141,
    proverb: "The fruit of the righteous is a tree of life, and the one who is wise saves lives."
  },
  {
    id: 142,
    proverb: "If the righteous receive their due on earth, how much more the ungodly and the sinner!"
  },
  {
    id: 143,
    proverb: "Whoever loves discipline loves knowledge, but whoever hates correction is stupid."
  },
  {
    id: 144,
    proverb: "Good people obtain favor from the Lord, but he condemns those who devise wicked schemes."
  },
  {
    id: 145,
    proverb: "No one can be established through wickedness, but the righteous cannot be uprooted."
  },
  {
    id: 146,
    proverb: "A wife of noble character is her husband's crown, but a disgraceful wife is like decay in his bones."
  },
  {
    id: 147,
    proverb: "The plans of the righteous are just, but the advice of the wicked is deceitful."
  },
  {
    id: 148,
    proverb: "The words of the wicked lie in wait for blood, but the speech of the upright rescues them."
  },
  {
    id: 149,
    proverb: "The wicked are overthrown and are no more, but the house of the righteous stands firm."
  },
  {
    id: 150,
    proverb: "A person is praised according to their prudence, and one with a warped mind is despised."
  },
  {
    id: 151,
    proverb: "Better to be a nobody and yet have a servant than pretend to be somebody and have no food."
  },
  {
    id: 152,
    proverb: "The righteous care for the needs of their animals, but the kindest acts of the wicked are cruel."
  },
  {
    id: 153,
    proverb: "Those who work their land will have abundant food, but those who chase fantasies have no sense."
  },
  {
    id: 154,
    proverb: "The wicked desire the stronghold of evildoers, but the root of the righteous endures."
  },
  {
    id: 155,
    proverb: "Evildoers are trapped by their sinful talk, and so the innocent escape trouble."
  },
  {
    id: 156,
    proverb: "From the fruit of their lips people are filled with good things, and the work of their hands brings them reward."
  },
  {
    id: 157,
    proverb: "The way of fools seems right to them, but the wise listen to advice."
  },
  {
    id: 158,
    proverb: "Fools show their annoyance at once, but the prudent overlook an insult."
  },
  {
    id: 159,
    proverb: "An honest witness tells the truth, but a false witness tells lies."
  },
  {
    id: 160,
    proverb: "The words of the reckless pierce like swords, but the tongue of the wise brings healing."
  },
  {
    id: 161,
    proverb: "Truthful lips endure forever, but a lying tongue lasts only a moment."
  },
  {
    id: 162,
    proverb: "Deceit is in the hearts of those who plot evil, but those who promote peace have joy."
  },
  {
    id: 163,
    proverb: "No harm overtakes the righteous, but the wicked have their fill of trouble."
  },
  {
    id: 164,
    proverb: "The Lord detests lying lips, but he delights in people who are trustworthy."
  },
  {
    id: 165,
    proverb: "The prudent keep their knowledge to themselves, but a fool's heart blurts out folly."
  },
  {
    id: 166,
    proverb: "Diligent hands will rule, but laziness ends in forced labor."
  },
  {
    id: 167,
    proverb: "Anxiety weighs down the heart, but a kind word cheers it up."
  },
  {
    id: 168,
    proverb: "The righteous choose their friends carefully, but the way of the wicked leads them astray."
  },
  {
    id: 169,
    proverb: "The lazy do not roast any game, but the diligent feed on the riches of the hunt."
  },
  {
    id: 170,
    proverb: "In the way of righteousness there is life; along that path is immortality."
  },
  {
    id: 171,
    proverb: "A wise son heeds his father's instruction, but a mocker does not respond to rebukes."
  },
  {
    id: 172,
    proverb: "From the fruit of their lips people enjoy good things, but the unfaithful have an appetite for violence."
  },
  {
    id: 173,
    proverb: "Those who guard their lips preserve their lives, but those who speak rashly will come to ruin."
  },
  {
    id: 174,
    proverb: "A sluggard's appetite is never filled, but the desires of the diligent are fully satisfied."
  },
  {
    id: 175,
    proverb: "The righteous hate what is false, but the wicked make themselves a stench and bring shame on themselves."
  },
  {
    id: 176,
    proverb: "Righteousness guards the person of integrity, but wickedness overthrows the sinner."
  },
  {
    id: 177,
    proverb: "One person pretends to be rich, yet has nothing; another pretends to be poor, yet has great wealth."
  },
  {
    id: 178,
    proverb: "A person's riches may ransom their life, but the poor cannot respond to threatening rebukes."
  },
  {
    id: 179,
    proverb: "The light of the righteous shines brightly, but the lamp of the wicked is snuffed out."
  },
  {
    id: 180,
    proverb: "Where there is strife, there is pride, but wisdom is found in those who take advice."
  },
  {
    id: 181,
    proverb: "Dishonest money dwindles away, but whoever gathers money little by little makes it grow."
  },
  {
    id: 182,
    proverb: "Hope deferred makes the heart sick, but a longing fulfilled is a tree of life."
  },
  {
    id: 183,
    proverb: "Whoever scorns instruction will pay for it, but whoever respects a command is rewarded."
  },
  {
    id: 184,
    proverb: "The teaching of the wise is a fountain of life, turning a person from the snares of death."
  },
  {
    id: 185,
    proverb: "Good judgment wins favor, but the way of the unfaithful leads to their destruction."
  },
  {
    id: 186,
    proverb: "All who are prudent act with knowledge, but fools expose their folly."
  },
  {
    id: 187,
    proverb: "A wicked messenger falls into trouble, but a trustworthy envoy brings healing."
  },
  {
    id: 188,
    proverb: "Whoever disregards discipline comes to poverty and shame, but whoever heeds correction is honored."
  },
  {
    id: 189,
    proverb: "A longing fulfilled is sweet to the soul, but fools detest turning from evil."
  },
  {
    id: 190,
    proverb: "Walk with the wise and become wise, for a companion of fools suffers harm."
  },
  {
    id: 191,
    proverb: "Trouble pursues the sinner, but the righteous are rewarded with good things."
  },
  {
    id: 192,
    proverb: "A good person leaves an inheritance for their children's children, but a sinner's wealth is stored up for the righteous."
  },
  {
    id: 193,
    proverb: "An unplowed field produces food for the poor, but injustice sweeps it away."
  },
  {
    id: 194,
    proverb: "Whoever spares the rod hates their children, but the one who loves their children is careful to discipline them."
  },
  {
    id: 195,
    proverb: "The righteous eat to their hearts' content, but the stomach of the wicked goes hungry."
  },
  {
    id: 196,
    proverb: "The wise woman builds her house, but with her own hands the foolish one tears hers down."
  },
  {
    id: 197,
    proverb: "Whoever fears the Lord walks uprightly, but those who despise him are devious in their ways."
  },
  {
    id: 198,
    proverb: "A fool's mouth lashes out with pride, but the lips of the wise protect them."
  },
  {
    id: 199,
    proverb: "Where there are no oxen, the manger is empty, but from the strength of an ox come abundant harvests."
  },
  {
    id: 200,
    proverb: "An honest witness does not deceive, but a false witness pours out lies."
  },
  {
    id: 201,
    proverb: "The mocker seeks wisdom and finds none, but knowledge comes easily to the discerning."
  },
  {
    id: 202,
    proverb: "Stay away from a fool, for you will not find knowledge on their lips."
  },
  {
    id: 203,
    proverb: "The wisdom of the prudent is to give thought to their ways, but the folly of fools is deception."
  },
  {
    id: 204,
    proverb: "Fools mock at making amends for sin, but goodwill is found among the upright."
  },
  {
    id: 205,
    proverb: "Each heart knows its own bitterness, and no one else can share its joy."
  },
  {
    id: 206,
    proverb: "The house of the wicked will be destroyed, but the tent of the upright will flourish."
  },
  {
    id: 207,
    proverb: "There is a way that appears to be right, but in the end it leads to death."
  },
  {
    id: 208,
    proverb: "Even in laughter the heart may ache, and rejoicing may end in grief."
  },
  {
    id: 209,
    proverb: "The faithless will be fully repaid for their ways, and the good rewarded for theirs."
  },
  {
    id: 210,
    proverb: "The simple believe anything, but the prudent give thought to their steps."
  },
  {
    id: 211,
    proverb: "The wise fear the Lord and shun evil, but a fool is hotheaded and yet feels secure."
  },
  {
    id: 212,
    proverb: "A quick-tempered person does foolish things, and the one who devises evil schemes is hated."
  },
  {
    id: 213,
    proverb: "The simple inherit folly, but the prudent are crowned with knowledge."
  },
  {
    id: 214,
    proverb: "Evildoers will bow down in the presence of the good, and the wicked at the gates of the righteous."
  },
  {
    id: 215,
    proverb: "The poor are shunned even by their neighbors, but the rich have many friends."
  },
  {
    id: 216,
    proverb: "It is a sin to despise one's neighbor, but blessed is the one who is kind to the needy."
  },
  {
    id: 217,
    proverb: "Do not those who plot evil go astray? But those who plan what is good find love and faithfulness."
  },
  {
    id: 218,
    proverb: "All hard work brings a profit, but mere talk leads only to poverty."
  },
  {
    id: 219,
    proverb: "The wealth of the wise is their crown, but the folly of fools yields folly."
  },
  {
    id: 220,
    proverb: "A truthful witness saves lives, but a false witness is deceitful."
  },
  {
    id: 221,
    proverb: "Whoever fears the Lord has a secure fortress, and for their children it will be a refuge."
  },
  {
    id: 222,
    proverb: "The fear of the Lord is a fountain of life, turning a person from the snares of death."
  },
  {
    id: 223,
    proverb: "A large population is a king's glory, but without subjects a prince is ruined."
  },
  {
    id: 224,
    proverb: "Whoever is patient has great understanding, but one who is quick-tempered displays folly."
  },
  {
    id: 225,
    proverb: "A heart at peace gives life to the body, but envy rots the bones."
  },
  {
    id: 226,
    proverb: "Whoever oppresses the poor shows contempt for their Maker, but whoever is kind to the needy honors God."
  },
  {
    id: 227,
    proverb: "When calamity comes, the wicked are brought down, but even in death the righteous seek refuge in God."
  },
  {
    id: 228,
    proverb: "Wisdom reposes in the heart of the discerning and even among fools she lets herself be known."
  },
  {
    id: 229,
    proverb: "Righteousness exalts a nation, but sin condemns any people."
  },
  {
    id: 230,
    proverb: "A king delights in a wise servant, but a shameful servant arouses his fury."
  },
  {
    id: 231,
    proverb: "A gentle answer turns away wrath, but a harsh word stirs up anger."
  },
  {
    id: 232,
    proverb: "The tongue of the wise adorns knowledge, but the mouth of the fool gushes folly."
  },
  {
    id: 233,
    proverb: "The eyes of the Lord are everywhere, keeping watch on the wicked and the good."
  },
  {
    id: 234,
    proverb: "The soothing tongue is a tree of life, but a perverse tongue crushes the spirit."
  },
  {
    id: 235,
    proverb: "A fool spurns a parent's discipline, but whoever heeds correction shows prudence."
  },
  {
    id: 236,
    proverb: "The house of the righteous contains great treasure, but the income of the wicked brings ruin."
  },
  {
    id: 237,
    proverb: "The lips of the wise spread knowledge, but the hearts of fools are not upright."
  },
  {
    id: 238,
    proverb: "The Lord detests the sacrifice of the wicked, but the prayer of the upright pleases him."
  },
  {
    id: 239,
    proverb: "The Lord detests the way of the wicked, but he loves those who pursue righteousness."
  },
  {
    id: 240,
    proverb: "Stern discipline awaits anyone who leaves the path; the one who hates correction will die."
  },
  {
    id: 241,
    proverb: "Death and Destruction lie open before the Lord— how much more do human hearts!"
  },
  {
    id: 242,
    proverb: "Mockers resent correction, so they avoid the wise."
  },
  {
    id: 243,
    proverb: "A happy heart makes the face cheerful, but heartache crushes the spirit."
  },
  {
    id: 244,
    proverb: "The discerning heart seeks knowledge, but the mouth of a fool feeds on folly."
  },
  {
    id: 245,
    proverb: "All the days of the oppressed are wretched, but the cheerful heart has a continual feast."
  },
  {
    id: 246,
    proverb: "Better a little with the fear of the Lord than great wealth with turmoil."
  },
  {
    id: 247,
    proverb: "Better a small serving of vegetables with love than a fattened calf with hatred."
  },
  {
    id: 248,
    proverb: "A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel."
  },
  {
    id: 249,
    proverb: "The way of the sluggard is blocked with thorns, but the path of the upright is a highway."
  },
  {
    id: 250,
    proverb: "A wise son brings joy to his father, but a foolish man despises his mother."
  },
  {
    id: 251,
    proverb: "Folly brings joy to one who has no sense, but whoever has understanding keeps a straight course."
  },
  {
    id: 252,
    proverb: "Plans fail for lack of counsel, but with many advisers they succeed."
  },
  {
    id: 253,
    proverb: "A person finds joy in giving an apt reply— and how good is a timely word!"
  },
  {
    id: 254,
    proverb: "The path of life leads upward for the prudent to keep them from going down to the realm of the dead."
  },
  {
    id: 255,
    proverb: "The Lord tears down the house of the proud, but he sets the widow's boundary stones in place."
  },
  {
    id: 256,
    proverb: "The Lord detests the thoughts of the wicked, but gracious words are pure in his sight."
  },
  {
    id: 257,
    proverb: "The greedy bring ruin to their households, but the one who hates bribes will live."
  },
  {
    id: 258,
    proverb: "The heart of the righteous weighs its answers, but the mouth of the wicked gushes evil."
  },
  {
    id: 259,
    proverb: "The Lord is far from the wicked, but he hears the prayer of the righteous."
  },
  {
    id: 260,
    proverb: "Light in a messenger's eyes brings joy to the heart, and good news gives health to the bones."
  },
  {
    id: 261,
    proverb: "Whoever heeds life-giving correction will be at home among the wise."
  },
  {
    id: 262,
    proverb: "Those who disregard discipline despise themselves, but the one who heeds correction gains understanding."
  },
  {
    id: 263,
    proverb: "Wisdom's instruction is to fear the Lord, and humility comes before honor."
  },
  {
    id: 264,
    proverb: "To humans belong the plans of the heart, but from the Lord comes the proper answer of the tongue."
  },
  {
    id: 265,
    proverb: "All a person's ways seem pure to them, but motives are weighed by the Lord."
  },
  {
    id: 266,
    proverb: "Commit to the Lord whatever you do, and he will establish your plans."
  },
  {
    id: 267,
    proverb: "The Lord works out everything to its proper end— even the wicked for a day of disaster."
  },
  {
    id: 268,
    proverb: "The Lord detests all the proud of heart. Be sure of this: They will not go unpunished."
  },
  {
    id: 269,
    proverb: "Through love and faithfulness sin is atoned for; through the fear of the Lord evil is avoided."
  },
  {
    id: 270,
    proverb: "When the Lord takes pleasure in anyone's way, he causes their enemies to make peace with them."
  },
  {
    id: 271,
    proverb: "Better a little with righteousness than much gain with injustice."
  },
  {
    id: 272,
    proverb: "In their hearts humans plan their course, but the Lord establishes their steps."
  },
  {
    id: 273,
    proverb: "The lips of a king speak as an oracle, and his mouth does not betray justice."
  },
  {
    id: 274,
    proverb: "Honest scales and balances belong to the Lord; all the weights in the bag are of his making."
  },
  {
    id: 275,
    proverb: "Kings detest wrongdoing, for a throne is established through righteousness."
  },
  {
    id: 276,
    proverb: "Kings take pleasure in honest lips; they value the one who speaks what is right."
  },
  {
    id: 277,
    proverb: "A king's wrath is a messenger of death, but the wise will appease it."
  },
  {
    id: 278,
    proverb: "When a king's face brightens, it means life; his favor is like a rain cloud in spring."
  },
  {
    id: 279,
    proverb: "How much better to get wisdom than gold, to get insight rather than silver!"
  },
  {
    id: 280,
    proverb: "The highway of the upright avoids evil; those who guard their ways preserve their lives."
  },
  {
    id: 281,
    proverb: "Pride goes before destruction, a haughty spirit before a fall."
  },
  {
    id: 282,
    proverb: "Better to be lowly in spirit along with the oppressed than to share plunder with the proud."
  },
  {
    id: 283,
    proverb: "Whoever gives heed to instruction prospers, and blessed is the one who trusts in the Lord."
  },
  {
    id: 284,
    proverb: "The wise in heart are called discerning, and gracious words promote instruction."
  },
  {
    id: 285,
    proverb: "Prudence is a fountain of life to the prudent, but folly brings punishment to fools."
  },
  {
    id: 286,
    proverb: "The hearts of the wise make their mouths prudent, and their lips promote instruction."
  },
  {
    id: 287,
    proverb: "Gracious words are a honeycomb, sweet to the soul and healing to the bones."
  },
  {
    id: 288,
    proverb: "There is a way that appears to be right, but in the end it leads to death."
  },
  {
    id: 289,
    proverb: "The appetite of laborers works for them; their hunger drives them on."
  },
  {
    id: 290,
    proverb: "A scoundrel plots evil, and on their lips it is like a scorching fire."
  },
  {
    id: 291,
    proverb: "A perverse person stirs up conflict, and a gossip separates close friends."
  },
  {
    id: 292,
    proverb: "A violent person entices their neighbor and leads them down a path that is not good."
  },
  {
    id: 293,
    proverb: "Whoever winks with their eye is plotting perversity; whoever purses their lips is bent on evil."
  },
  {
    id: 294,
    proverb: "Gray hair is a crown of splendor; it is attained in the way of righteousness."
  },
  {
    id: 295,
    proverb: "Better a patient person than a warrior, one with self - control than one who takes a city."
  },
  {
    id: 296,
    proverb: "The lot is cast into the lap, but its every decision is from the Lord."
  },
  {
    id: 297,
    proverb: "Better a dry crust with peace and quiet than a house full of feasting, with strife."
  },
  {
    id: 298,
    proverb: "A prudent servant will rule over a disgraceful son and will share the inheritance as one of the family."
  },
  {
    id: 299,
    proverb: "The crucible for silver and the furnace for gold, but the Lord tests the heart."
  },
  {
    id: 300,
    proverb: "A wicked person listens to deceitful lips; a liar pays attention to a destructive tongue."
  },
  {
    id: 301,
    proverb: "Whoever mocks the poor shows contempt for their Maker; whoever gloats over disaster will not go unpunished."
  },
  {
    id: 302,
    proverb: "Children's children are a crown to the aged, and parents are the pride of their children."
  },
  {
    id: 303,
    proverb: "Eloquent lips are unsuited to a godless fool— how much worse lying lips to a ruler!"
  },
  {
    id: 304,
    proverb: "A bribe is seen as a charm by the one who gives it; they think success will come at every turn."
  },
  {
    id: 305,
    proverb: "Whoever would foster love covers over an offense, but whoever repeats the matter separates close friends."
  },
  {
    id: 306,
    proverb: "A rebuke impresses a discerning person more than a hundred lashes a fool."
  },
  {
    id: 307,
    proverb: "Evildoers foster rebellion against God; the messenger of death will be sent against them."
  },
  {
    id: 308,
    proverb: "Better to meet a bear robbed of her cubs than a fool bent on folly."
  },
  {
    id: 309,
    proverb: "Evil will never leave the house of one who pays back evil for good."
  },
  {
    id: 310,
    proverb: "Starting a quarrel is like breaching a dam; so drop the matter before a dispute breaks out."
  },
  {
    id: 311,
    proverb: "Acquitting the guilty and condemning the innocent— the Lord detests them both."
  },
  {
    id: 312,
    proverb: "Why should fools have money in hand to buy wisdom, when they are not able to understand it?"
  },
  {
    id: 313,
    proverb: "A friend loves at all times, and a brother is born for a time of adversity."
  },
  {
    id: 314,
    proverb: "One who has no sense shakes hands in pledge and puts up security for a neighbor."
  },
  {
    id: 315,
    proverb: "Whoever loves a quarrel loves sin; whoever builds a high gate invites destruction."
  },
  {
    id: 316,
    proverb: "One whose heart is corrupt does not prosper; one whose tongue is perverse falls into trouble."
  },
  {
    id: 317,
    proverb: "To have a fool for a child brings grief; there is no joy for the parent of a godless fool."
  },
  {
    id: 318,
    proverb: "A cheerful heart is good medicine, but a crushed spirit dries up the bones."
  },
  {
    id: 319,
    proverb: "The wicked accept bribes in secret to pervert the course of justice."
  },
  {
    id: 320,
    proverb: "A discerning person keeps wisdom in view, but a fool’s eyes wander to the ends of the earth."
  },
  {
    id: 321,
    proverb: "A foolish son brings grief to his father and bitterness to the mother who bore him."
  },
  {
    id: 322,
    proverb: "If imposing a fine on the innocent is not good, surely to flog honest officials is not right."
  },
  {
    id: 323,
    proverb: "The one who has knowledge uses words with restraint, and whoever has understanding is even- tempered."
  },
  {
    id: 324,
    proverb: "Even fools are thought wise if they keep silent, and discerning if they hold their tongues."
  },
  {
    id: 325,
    proverb: "An unfriendly person pursues selfish ends and against all sound judgment starts quarrels."
  },
  {
    id: 326,
    proverb: "Fools find no pleasure in understanding but delight in airing their own opinions."
  },
  {
    id: 327,
    proverb: "When wickedness comes, so does contempt, and with shame comes reproach."
  },
  {
    id: 328,
    proverb: "The words of the mouth are deep waters, but the fountain of wisdom is a rushing stream."
  },
  {
    id: 329,
    proverb: "It is not good to be partial to the wicked and so deprive the innocent of justice."
  },
  {
    id: 330,
    proverb: "The lips of fools bring them strife, and their mouths invite a beating."
  },
  {
    id: 331,
    proverb: "The mouths of fools are their undoing, and their lips are a snare to their very lives."
  },
  {
    id: 332,
    proverb: "The words of a gossip are like choice morsels; they go down to the inmost parts."
  },
  {
    id: 333,
    proverb: "One who is slack in his work is brother to one who destroys."
  },
  {
    id: 334,
    proverb: "The name of the Lord is a fortified tower; the righteous run to it and are safe."
  },
  {
    id: 335,
    proverb: "The wealth of the rich is their fortified city; they imagine it a wall too high to scale."
  },
  {
    id: 336,
    proverb: "Before a downfall the heart is haughty, but humility comes before honor."
  },
  {
    id: 337,
    proverb: "To answer before listening— that is folly and shame."
  },
  {
    id: 338,
    proverb: "The human spirit can endure in sickness, but a crushed spirit who can bear?"
  },
  {
    id: 339,
    proverb: "The heart of the discerning acquires knowledge, for the ears of the wise seek it out."
  },
  {
    id: 340,
    proverb: "A gift opens the way and ushers the giver into the presence of the great."
  },
  {
    id: 341,
    proverb: "In a lawsuit the first to speak seems right, until someone comes forward and cross- examines."
  },
  {
    id: 342,
    proverb: "Casting the lot settles disputes and keeps strong opponents apart."
  },
  {
    id: 343,
    proverb: "A brother wronged is more unyielding than a fortified city; disputes are like the barred gates of a citadel."
  },
  {
    id: 344,
    proverb: "From the fruit of their mouth a person's stomach is filled; with the harvest of their lips they are satisfied."
  },
  {
    id: 345,
    proverb: "The tongue has the power of life and death, and those who love it will eat its fruit."
  },
  {
    id: 346,
    proverb: "He who finds a wife finds what is good and receives favor from the Lord."
  },
  {
    id: 347,
    proverb: "The poor plead for mercy, but the rich answer harshly."
  },
  {
    id: 348,
    proverb: "One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother."
  },
  {
    id: 349,
    proverb: "Better the poor whose walk is blameless than a fool whose lips are perverse."
  },
  {
    id: 350,
    proverb: "Desire without knowledge is not good— how much more will hasty feet miss the way!"
  },
  {
    id: 351,
    proverb: "A person's own folly leads to their ruin, yet their heart rages against the Lord."
  },
  {
    id: 352,
    proverb: "Wealth attracts many friends, but even the closest friend of the poor person deserts them."
  },
  {
    id: 353,
    proverb: "A false witness will not go unpunished, and whoever pours out lies will not go free."
  },
  {
    id: 354,
    proverb: "Many curry favor with a ruler, and everyone is the friend of one who gives gifts."
  },
  {
    id: 355,
    proverb: "The poor are shunned by all their relatives— how much more do their friends avoid them! Though the poor pursue them with pleading, they are nowhere to be found."
  },
  {
    id: 356,
    proverb: "The one who gets wisdom loves life; the one who cherishes understanding will soon prosper."
  },
  {
    id: 357,
    proverb: "A false witness will not go unpunished, and whoever pours out lies will perish."
  },
  {
    id: 358,
    proverb: "It is not fitting for a fool to live in luxury— how much worse for a slave to rule over princes!"
  },
  {
    id: 359,
    proverb: "A person's wisdom yields patience; it is to one's glory to overlook an offense."
  },
  {
    id: 360,
    proverb: "A king's rage is like the roar of a lion, but his favor is like dew on the grass."
  },
  {
    id: 361,
    proverb: "A foolish child is a father's ruin, and a quarrelsome wife is like the constant dripping of a leaky roof."
  },
  {
    id: 362,
    proverb: "Houses and wealth are inherited from parents, but a prudent wife is from the Lord."
  },
  {
    id: 363,
    proverb: "Laziness brings on deep sleep, and the shiftless go hungry."
  },
  {
    id: 364,
    proverb: "Whoever keeps commandments keeps their life, but whoever shows contempt for their ways will die."
  },
  {
    id: 365,
    proverb: "Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done."
  },
  {
    id: 366,
    proverb: "Discipline your children, for in that there is hope; do not be a willing party to their death."
  },
  {
    id: 367,
    proverb: "A hot-tempered person must pay the penalty; rescue them, and you will have to do it again."
  },
  {
    id: 368,
    proverb: "Listen to advice and accept discipline, and at the end you will be counted among the wise."
  },
  {
    id: 369,
    proverb: "Many are the plans in a person's heart, but it is the Lord's purpose that prevails."
  },
  {
    id: 370,
    proverb: "What a person desires is unfailing love; better to be poor than a liar."
  },
  {
    id: 371,
    proverb: "The fear of the Lord leads to life; then one rests content, untouched by trouble."
  },
  {
    id: 372,
    proverb: "A sluggard buries his hand in the dish; he will not even bring it back to his mouth!"
  },
  {
    id: 373,
    proverb: "Flog a mocker, and the simple will learn prudence; rebuke the discerning, and they will gain knowledge."
  },
  {
    id: 374,
    proverb: "Whoever robs their father and drives out their mother is a child who brings shame and disgrace."
  },
  {
    id: 375,
    proverb: "Stop listening to instruction, my son, and you will stray from the words of knowledge."
  },
  {
    id: 376,
    proverb: "A corrupt witness mocks at justice, and the mouth of the wicked gulps down evil."
  },
  {
    id: 377,
    proverb: "Penalties are prepared for mockers, and beatings for the backs of fools."
  },
  {
    id: 378,
    proverb: "Wine is a mocker and beer a brawler; whoever is led astray by them is not wise."
  },
  {
    id: 379,
    proverb: "A king's wrath strikes terror like the roar of a lion; those who anger him forfeit their lives."
  },
  {
    id: 380,
    proverb: "It is to one's honor to avoid strife, but every fool is quick to quarrel."
  },
  {
    id: 381,
    proverb: "Sluggards do not plow in season; so at harvest time they look but find nothing."
  },
  {
    id: 382,
    proverb: "The purposes of a person's heart are deep waters, but one who has insight draws them out."
  },
  {
    id: 383,
    proverb: "Many claim to have unfailing love, but a faithful person who can find?"
  },
  {
    id: 384,
    proverb: "The righteous lead blameless lives; blessed are their children after them."
  },
  {
    id: 385,
    proverb: "When a king sits on his throne to judge, he winnows out all evil with his eyes."
  },
  {
    id: 386,
    proverb: "Who can say, “I have kept my heart pure; I am clean and without sin”?"
  },
  {
    id: 387,
    proverb: "Differing weights and differing measures— the Lord detests them both."
  },
  {
    id: 388,
    proverb: "Even small children are known by their actions, so is their conduct really pure and upright?"
  },
  {
    id: 389,
    proverb: "Ears that hear and eyes that see— the Lord has made them both."
  },
  {
    id: 390,
    proverb: "Do not love sleep or you will grow poor; stay awake and you will have food to spare."
  },
  {
    id: 391,
    proverb: "“It's no good, it's no good!” says the buyer— then goes off and boasts about the purchase."
  },
  {
    id: 392,
    proverb: "Gold there is, and rubies in abundance, but lips that speak knowledge are a rare jewel."
  },
  {
    id: 393,
    proverb: "Take the garment of one who puts up security for a stranger; hold it in pledge if it is done for an outsider."
  },
  {
    id: 394,
    proverb: "Food gained by fraud tastes sweet, but one ends up with a mouth full of gravel."
  },
  {
    id: 395,
    proverb: "Plans are established by seeking advice; so if you wage war, obtain guidance."
  },
  {
    id: 396,
    proverb: "A gossip betrays a confidence; so avoid anyone who talks too much."
  },
  {
    id: 397,
    proverb: "If someone curses their father or mother, their lamp will be snuffed out in pitch darkness."
  },
  {
    id: 398,
    proverb: "An inheritance claimed too soon will not be blessed at the end."
  },
  {
    id: 399,
    proverb: "Do not say, “I'll pay you back for this wrong!” Wait for the Lord, and he will avenge you."
  },
  {
    id: 400,
    proverb: "The Lord detests differing weights, and dishonest scales do not please him."
  },
  {
    id: 401,
    proverb: "A person's steps are directed by the Lord. How then can anyone understand their own way?"
  },
  {
    id: 402,
    proverb: "It is a trap to dedicate something rashly and only later to consider one's vows."
  },
  {
    id: 403,
    proverb: "A wise king winnows out the wicked; he drives the threshing wheel over them."
  },
  {
    id: 404,
    proverb: "The human spirit is the lamp of the Lord that sheds light on one’s inmost being."
  },
  {
    id: 405,
    proverb: "Love and faithfulness keep a king safe; through love his throne is made secure."
  },
  {
    id: 406,
    proverb: "The glory of young men is their strength, gray hair the splendor of the old."
  },
  {
    id: 407,
    proverb: "Blows and wounds scrub away evil, and beatings purge the inmost being."
  },
  {
    id: 408,
    proverb: "In the Lord's hand the king's heart is a stream of water that he channels toward all who please him."
  },
  {
    id: 409,
    proverb: "A person may think their own ways are right, but the Lord weighs the heart."
  },
  {
    id: 410,
    proverb: "To do what is right and just is more acceptable to the Lord than sacrifice."
  },
  {
    id: 411,
    proverb: "Haughty eyes and a proud heart— the unplowed field of the wicked— produce sin."
  },
  {
    id: 412,
    proverb: "The plans of the diligent lead to profit as surely as haste leads to poverty."
  },
  {
    id: 413,
    proverb: "A fortune made by a lying tongue is a fleeting vapor and a deadly snare."
  },
  {
    id: 414,
    proverb: "The violence of the wicked will drag them away, for they refuse to do what is right."
  },
  {
    id: 415,
    proverb: "The way of the guilty is devious, but the conduct of the innocent is upright."
  },
  {
    id: 416,
    proverb: "Better to live on a corner of the roof than share a house with a quarrelsome wife."
  },
  {
    id: 417,
    proverb: "The wicked crave evil; their neighbors get no mercy from them."
  },
  {
    id: 418,
    proverb: "When a mocker is punished, the simple gain wisdom; by paying attention to the wise they get knowledge."
  },
  {
    id: 419,
    proverb: "The Righteous One takes note of the house of the wicked and brings the wicked to ruin."
  },
  {
    id: 420,
    proverb: "Whoever shuts their ears to the cry of the poor will also cry out and not be answered."
  },
  {
    id: 421,
    proverb: "A gift given in secret soothes anger, and a bribe concealed in the cloak pacifies great wrath."
  },
  {
    id: 422,
    proverb: "When justice is done, it brings joy to the righteous but terror to evildoers."
  },
  {
    id: 423,
    proverb: "Whoever strays from the path of prudence comes to rest in the company of the dead."
  },
  {
    id: 424,
    proverb: "Whoever loves pleasure will become poor; whoever loves wine and olive oil will never be rich."
  },
  {
    id: 425,
    proverb: "The wicked become a ransom for the righteous, and the unfaithful for the upright."
  },
  {
    id: 426,
    proverb: "Better to live in a desert than with a quarrelsome and nagging wife."
  },
  {
    id: 427,
    proverb: "The wise store up choice food and olive oil, but fools gulp theirs down."
  },
  {
    id: 428,
    proverb: "Whoever pursues righteousness and love finds life, prosperity and honor."
  },
  {
    id: 429,
    proverb: "One who is wise can go up against the city of the mighty and pull down the stronghold in which they trust."
  },
  {
    id: 430,
    proverb: "Those who guard their mouths and their tongues keeps themselves from calamity."
  },
  {
    id: 431,
    proverb: "The proud and arrogant person— “Mocker” is his name— behaves with insolent fury."
  },
  {
    id: 432,
    proverb: "The craving of a sluggard will be the death of him, because his hands refuse to work."
  },
  {
    id: 433,
    proverb: "All day long he [the sluggard] craves for more, but the righteous give without sparing."
  },
  {
    id: 434,
    proverb: "The sacrifice of the wicked is detestable— how much more so when brought with evil intent!"
  },
  {
    id: 435,
    proverb: "A false witness will perish, but a careful listener will testify successfully."
  },
  {
    id: 436,
    proverb: "The wicked put up a bold front, but the upright give thought to their ways."
  },
  {
    id: 437,
    proverb: "There is no wisdom, no insight, no plan that can succeed against the Lord."
  },
  {
    id: 438,
    proverb: "The horse is made ready for the day of battle, but victory rests with the Lord."
  },
  {
    id: 439,
    proverb: "A good name is more desirable than great riches; to be esteemed is better than silver or gold."
  },
  {
    id: 440,
    proverb: "Rich and poor have this in common: The Lord is the Maker of them all."
  },
  {
    id: 441,
    proverb: "The prudent see danger and take refuge, but the simple keep going and pay the penalty."
  },
  {
    id: 442,
    proverb: "Humility is the fear of the Lord; its wages are riches and honor and life."
  },
  {
    id: 443,
    proverb: "In the paths of the wicked are snares and pitfalls, but those who would preserve their life stay far from them."
  },
  {
    id: 444,
    proverb: "Start children off on the way they should go, and even when they are old they will not turn from it."
  },
  {
    id: 445,
    proverb: "The rich rule over the poor, and the borrower is slave to the lender."
  },
  {
    id: 446,
    proverb: "Whoever sows injustice reaps calamity, and the rod they wield in fury will be broken."
  },
  {
    id: 447,
    proverb: "The generous will themselves be blessed, for they share their food with the poor."
  },
  {
    id: 448,
    proverb: "Drive out the mocker, and out goes strife; quarrels and insults are ended."
  },
  {
    id: 449,
    proverb: "One who loves a pure heart and who speaks with grace will have the king for a friend."
  },
  {
    id: 450,
    proverb: "The eyes of the Lord keep watch over knowledge, but he frustrates the words of the unfaithful."
  },
  {
    id: 451,
    proverb: "The sluggard says, “There's a lion outside! I'll be killed in the public square!”"
  },
  {
    id: 452,
    proverb: "The mouth of an adulterous woman is a deep pit; a man who is under the Lord's wrath falls into it."
  },
  {
    id: 453,
    proverb: "Folly is bound up in the heart of a child, but the rod of discipline will drive it far away."
  },
  {
    id: 454,
    proverb: "One who oppresses the poor to increase his wealth and one who gives gifts to the rich— both come to poverty."
  },
  {
    id: 455,
    proverb: "Pay attention and turn your ear to the sayings of the wise; apply your heart to what I teach. for it is pleasing when you keep them in your heart and have all of them ready on your lips. So that your trust may be in the Lord, I teach you today, even you."
  },
  {
    id: 456,
    proverb: "Have I not written thirty sayings for you, sayings of counsel and knowledge, teaching you to be honest and to speak the truth, so that you bring back truthful reports to those you serve?"
  },
  {
    id: 457,
    proverb: "Do not exploit the poor because they are poor and do not crush the needy in court, for the Lord will take up their case and will exact life for life."
  },
  {
    id: 458,
    proverb: "Do not make friends with a hot-tempered person, do not associate with one easily angered, or you may learn their ways and get yourself ensnared."
  },
  {
    id: 459,
    proverb: "Do not be one who shakes hands in pledge or puts up security for debts; if you lack the means to pay, your very bed will be snatched from under you."
  },
  {
    id: 460,
    proverb: "Do not move an ancient boundary stone set up by your ancestors."
  },
  {
    id: 461,
    proverb: "Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank."
  },
  {
    id: 462,
    proverb: "When you sit to dine with a ruler, note well what is before you, and put a knife to your throat if you are given to gluttony. Do not crave his delicacies, for that food is deceptive."
  },
  {
    id: 463,
    proverb: "Do not wear yourself out to get rich; do not trust your own cleverness. Cast but a glance at riches, and they are gone, for they will surely sprout wings and fly off to the sky like an eagle."
  },
  {
    id: 464,
    proverb: "Do not eat the food of a begrudging host, do not crave his delicacies; for he is the kind of person who is always thinking about the cost. “Eat and drink,” he says to you, but his heart is not with you. You will vomit up the little you have eaten and will have wasted your compliments."
  },
  {
    id: 465,
    proverb: "Do not speak to fools, for they will scorn your prudent words."
  },
  {
    id: 466,
    proverb: "Do not move an ancient boundary stone or encroach on the fields of the fatherless, for their Defender is strong; he will take up their case against you."
  },
  {
    id: 467,
    proverb: "Apply your heart to instruction and your ears to words of knowledge."
  },
  {
    id: 468,
    proverb: "Do not withhold discipline from a child; if you punish them with the rod, they will not die. Punish them with the rod and save them from death."
  },
  {
    id: 469,
    proverb: "My son, if your heart is wise, then my heart will be glad indeed; my inmost being will rejoice when your lips speak what is right."
  },
  {
    id: 470,
    proverb: "Do not let your heart envy sinners, but always be zealous for the fear of the Lord. There is surely a future hope for you, and your hope will not be cut off."
  },
  {
    id: 471,
    proverb: "Listen, my son, and be wise, and set your heart on the right path: Do not join those who drink too much wine or gorge themselves on meat, for drunkards and gluttons become poor, and drowsiness clothes them in rags."
  },
  {
    id: 472,
    proverb: "Listen to your father, who gave you life, and do not despise your mother when she is old."
  },
  {
    id: 473,
    proverb: "Buy the truth and do not sell it— wisdom, instruction and insight as well."
  },
  {
    id: 474,
    proverb: "The father of a righteous child has great joy; a man who fathers a wise son rejoices in him."
  },
  {
    id: 475,
    proverb: "May your father and mother rejoice; may she who gave you birth be joyful!"
  },
  {
    id: 476,
    proverb: "My son, give me your heart and let your eyes delight in my ways, for an adulterous woman is a deep pit, and a wayward wife is a narrow well. Like a bandit she lies in wait and multiplies the unfaithful among men."
  },
  {
    id: 477,
    proverb: "Who has woe? Who has sorrow? Who has strife? Who has complaints? Who has needless bruises? Who has bloodshot eyes? Those who linger over wine, who go to sample bowls of mixed wine. Do not gaze at wine when it is red, when it sparkles in the cup, when it goes down smoothly! In the end it bites like a snake and poisons like a viper. Your eyes will see strange sights, and your mind will imagine confusing things. You will be like one sleeping on the high seas, lying on top of the rigging. “They hit me,” you will say, “but I'm not hurt! They beat me, but I don't feel it! When will I wake up so I can find another drink?”"
  },
  {
    id: 478,
    proverb: "Do not envy the wicked, do not desire their company; for their hearts plot violence, and their lips talk about making trouble."
  },
  {
    id: 479,
    proverb: "By wisdom a house is built, and through understanding it is established; through knowledge its rooms are filled with rare and beautiful treasures."
  },
  {
    id: 480,
    proverb: "The wise prevail through great power, and those who have knowledge muster their strength. Surely you need guidance to wage war, and victory is won through many advisers."
  },
  {
    id: 481,
    proverb: "Wisdom is too high for fools; in the assembly at the gate they must not open their mouths."
  },
  {
    id: 482,
    proverb: "Whoever plots evil will be known as a schemer. The schemes of folly are sin, and people detest a mocker."
  },
  {
    id: 483,
    proverb: "If you falter in a time of trouble, how small is your strength! Rescue those being led away to death; hold back those staggering toward slaughter. If you say, “But we knew nothing about this,” does not he who weighs the heart perceive it? Does not he who guards your life know it? Will he not repay everyone according to what they have done?"
  },
  {
    id: 484,
    proverb: "Eat honey, my son, for it is good; honey from the comb is sweet to your taste. Know also that wisdom is like honey for you: If you find it, there is a future hope for you, and your hope will not be cut off."
  },
  {
    id: 485,
    proverb: "Do not lurk like a thief near the house of the righteous, do not plunder their dwelling place; for though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes."
  },
  {
    id: 486,
    proverb: "Do not gloat when your enemy falls; when they stumble, do not let your heart rejoice, or the Lord will see and disapprove and turn his wrath away from them."
  },
  {
    id: 487,
    proverb: "Do not fret because of evildoers or be envious of the wicked, for the evildoer has no future hope, and the lamp of the wicked will be snuffed out."
  },
  {
    id: 488,
    proverb: "Fear the Lord and the king, my son, and do not join with rebellious officials, for those two will send sudden destruction on them, and who knows what calamities they can bring?"
  },
  {
    id: 489,
    proverb: "To show partiality in judging is not good: Whoever says to the guilty, “You are innocent,”     will be cursed by peoples and denounced by nations. But it will go well with those who convict the guilty, and rich blessing will come on them."
  },
  {
    id: 490,
    proverb: "An honest answer is like a kiss on the lips."
  },
  {
    id: 491,
    proverb: "Put your outdoor work in order and get your fields ready; after that, build your house."
  },
  {
    id: 492,
    proverb: "Do not testify against your neighbor without cause— would you use your lips to mislead? Do not say, “I'll do to them as they have done to me; I'll pay them back for what they did.”"
  },
  {
    id: 493,
    proverb: "I went past the field of a sluggard, past the vineyard of someone who has no sense; thorns had come up everywhere, the ground was covered with weeds, and the stone wall was in ruins. I applied my heart to what I observed and learned a lesson from what I saw: A little sleep, a little slumber, a little folding of the hands to rest— and poverty will come on you like a thief and scarcity like an armed man."
  },
  {
    id: 494,
    proverb: "It is the glory of God to conceal a matter; to search out a matter is the glory of kings."
  },
  {
    id: 495,
    proverb: "As the heavens are high and the earth is deep, so the hearts of kings are unsearchable."
  },
  {
    id: 496,
    proverb: "Remove the dross from the silver, and a silversmith can produce a vessel; remove wicked officials from the king's presence, and his throne will be established through righteousness."
  },
  {
    id: 497,
    proverb: "Do not exalt yourself in the king's presence, and do not claim a place among his great men; it is better for him to say to you, “Come up here,” than for him to humiliate you before his nobles."
  },
  {
    id: 498,
    proverb: "What you have seen with your eyes do not bring hastily to court, for what will you do in the end if your neighbor puts you to shame?"
  },
  {
    id: 499,
    proverb: "If you take your neighbor to court, do not betray another's confidence, or the one who hears it may shame you and the charge against you will stand."
  },
  {
    id: 500,
    proverb: "Like apples of gold in settings of silver is a ruling rightly given. Like an earring of gold or an ornament of fine gold is the rebuke of a wise judge to a listening ear."
  },
  {
    id: 501,
    proverb: "Like a snow-cooled drink at harvest time is a trustworthy messenger to the one who sends him; he refreshes the spirit of his master. Like clouds and wind without rain is one who boasts of gifts never given."
  },
  {
    id: 502,
    proverb: "Through patience a ruler can be persuaded, and a gentle tongue can break a bone."
  },
  {
    id: 503,
    proverb: "If you find honey, eat just enough— too much of it, and you will vomit. Seldom set foot in your neighbor's house— too much of you, and they will hate you."
  },
  {
    id: 504,
    proverb: "Like a club or a sword or a sharp arrow is one who gives false testimony against a neighbor."
  },
  {
    id: 505,
    proverb: "Like a broken tooth or a lame foot is reliance on the unfaithful in a time of trouble."
  },
  {
    id: 506,
    proverb: "Like one who takes away a garment on a cold day, or like vinegar poured on a wound, is one who sings songs to a heavy heart."
  },
  {
    id: 507,
    proverb: "If your enemy is hungry, give him food to eat; if he is thirsty, give him water to drink. In doing this, you will heap burning coals on his head, and the Lord will reward you."
  },
  {
    id: 508,
    proverb: "Like a north wind that brings unexpected rain is a sly tongue—which provokes a horrified look."
  },
  {
    id: 509,
    proverb: "Better to live on a corner of the roof than share a house with a quarrelsome wife."
  },
  {
    id: 510,
    proverb: "Like cold water to a weary soul is good news from a distant land."
  },
  {
    id: 511,
    proverb: "Like a muddied spring or a polluted well are the righteous who give way to the wicked."
  },
  {
    id: 512,
    proverb: "It is not good to eat too much honey, nor is it honorable to search out matters that are too deep."
  },
  {
    id: 513,
    proverb: "Like a city whose walls are broken through is a person who lacks self-control."
  },
  {
    id: 514,
    proverb: "Like snow in summer or rain in harvest, honor is not fitting for a fool."
  },
  {
    id: 515,
    proverb: "Like a fluttering sparrow or a darting swallow, an undeserved curse does not come to rest."
  },
  {
    id: 516,
    proverb: "A whip for the horse, a bridle for the donkey, and a rod for the backs of fools!"
  },
  {
    id: 517,
    proverb: "Do not answer a fool according to his folly, or you yourself will be just like him. Answer a fool according to his folly, or he will be wise in his own eyes."
  },
  {
    id: 518,
    proverb: "Sending a message by the hands of a fool is like cutting off one's feet or drinking poison."
  },
  {
    id: 519,
    proverb: "Like the useless legs of one who is lame is a proverb in the mouth of a fool."
  },
  {
    id: 520,
    proverb: "Like tying a stone in a sling is the giving of honor to a fool."
  },
  {
    id: 521,
    proverb: "Like a thornbush in a drunkard's hand is a proverb in the mouth of a fool."
  },
  {
    id: 522,
    proverb: "Like an archer who wounds at random is one who hires a fool or any passer-by."
  },
  {
    id: 523,
    proverb: "As a dog returns to its vomit, so fools repeat their folly."
  },
  {
    id: 524,
    proverb: "Do you see a person wise in their own eyes? There is more hope for a fool than for them."
  },
  {
    id: 525,
    proverb: "A sluggard says, “There's a lion in the road, a fierce lion roaming the streets!”"
  },
  {
    id: 526,
    proverb: "As a door turns on its hinges, so a sluggard turns on his bed."
  },
  {
    id: 527,
    proverb: "A sluggard buries his hand in the dish; he is too lazy to bring it back to his mouth."
  },
  {
    id: 528,
    proverb: "The sluggard is wiser in his own eyes than seven people who answer discreetly."
  },
  {
    id: 529,
    proverb: "Like one who grabs a stray dog by the ears is someone who rushes into a quarrel not their own."
  },
  {
    id: 530,
    proverb: "Like a maniac shooting flaming arrows of death is one who deceives their neighbor and says, “I was only joking!”"
  },
  {
    id: 531,
    proverb: "Without wood a fire goes out; without a gossip a quarrel dies down."
  },
  {
    id: 532,
    proverb: "As charcoal to embers and as wood to fire, so is a quarrelsome person for kindling strife."
  },
  {
    id: 533,
    proverb: "The words of a gossip are like choice morsels; they go down to the inmost parts."
  },
  {
    id: 534,
    proverb: "Like a coating of silver dross on earthenware are fervent lips with an evil heart."
  },
  {
    id: 535,
    proverb: "Enemies disguise themselves with their lips, but in their hearts they harbor deceit."
  },
  {
    id: 536,
    proverb: "Though their speech is charming, do not believe them, for seven abominations fill their hearts."
  },
  {
    id: 537,
    proverb: "Their malice may be concealed by deception, but their wickedness will be exposed in the assembly."
  },
  {
    id: 538,
    proverb: "Whoever digs a pit will fall into it; if someone rolls a stone, it will roll back on them."
  },
  {
    id: 539,
    proverb: "A lying tongue hates those it hurts, and a flattering mouth works ruin."
  },
  {
    id: 540,
    proverb: "Do not boast about tomorrow, for you do not know what a day may bring."
  },
  {
    id: 541,
    proverb: "Let someone else praise you, and not your own mouth; an outsider, and not your own lips."
  },
  {
    id: 542,
    proverb: "Stone is heavy and sand a burden, but a fool’s provocation is heavier than both."
  },
  {
    id: 543,
    proverb: "Anger is cruel and fury overwhelming, but who can stand before jealousy?"
  },
  {
    id: 544,
    proverb: "Better is open rebuke than hidden love."
  },
  {
    id: 545,
    proverb: "Wounds from a friend can be trusted, but an enemy multiplies kisses."
  },
  {
    id: 546,
    proverb: "One who is full loathes honey from the comb, but to the hungry even what is bitter tastes sweet."
  },
  {
    id: 547,
    proverb: "Like a bird that flees its nest is anyone who flees from home."
  },
  {
    id: 548,
    proverb: "Perfume and incense bring joy to the heart, and the pleasantness of a friend springs from their heartfelt advice."
  },
  {
    id: 549,
    proverb: "Do not forsake your friend or a friend of your family, and do not go to your relative's house when disaster strikes you— better a neighbor nearby than a relative far away."
  },
  {
    id: 550,
    proverb: "Be wise, my son, and bring joy to my heart; then I can answer anyone who treats me with contempt."
  },
  {
    id: 551,
    proverb: "The prudent see danger and take refuge, but the simple keep going and pay the penalty."
  },
  {
    id: 552,
    proverb: "Take the garment of one who puts up security for a stranger; hold it in pledge if it is done for an outsider."
  },
  {
    id: 553,
    proverb: "If anyone loudly blesses their neighbor early in the morning, it will be taken as a curse."
  },
  {
    id: 554,
    proverb: "A quarrelsome wife is like the dripping of a leaky roof in a rainstorm; restraining her is like restraining the wind or grasping oil with the hand."
  },
  {
    id: 555,
    proverb: "As iron sharpens iron, so one person sharpens another."
  },
  {
    id: 556,
    proverb: "The one who guards a fig tree will eat its fruit, and whoever protects their master will be honored."
  },
  {
    id: 557,
    proverb: "As water reflects the face, so one's life reflects the heart."
  },
  {
    id: 558,
    proverb: "Death and Destruction are never satisfied, and neither are human eyes."
  },
  {
    id: 559,
    proverb: "The crucible for silver and the furnace for gold, but people are tested by their praise."
  },
  {
    id: 560,
    proverb: "Though you grind a fool in a mortar, grinding them like grain with a pestle, you will not remove their folly from them."
  },
  {
    id: 561,
    proverb: "Know well the condition of your flocks, give careful attention to your herds;"
  },
  {
    id: 562,
    proverb: "for riches do not endure forever, and a crown is not secure for all generations."
  },
  {
    id: 563,
    proverb: "When the hay is removed and new growth appears and the grass from the hills is gathered in, the lambs will provide you with clothing, and the goats with the price of a field. You will have plenty of goats' milk to feed your family and to nourish your female servants."
  },
  {
    id: 564,
    proverb: "The wicked flee though no one pursues, but the righteous are as bold as a lion."
  },
  {
    id: 565,
    proverb: "When a country is rebellious, it has many rulers, but a ruler with discernment and knowledge maintains order."
  },
  {
    id: 566,
    proverb: "A ruler who oppresses the poor is like a driving rain that leaves no crops."
  },
  {
    id: 567,
    proverb: "Those who forsake instruction praise the wicked, but those who heed it resist them."
  },
  {
    id: 568,
    proverb: "Evildoers do not understand what is right, but those who seek the LORD understand it fully."
  },
  {
    id: 569,
    proverb: "Better the poor whose walk is blameless than the rich whose ways are perverse."
  },
  {
    id: 570,
    proverb: "A discerning son heeds instruction, but a companion of gluttons disgraces his father."
  },
  {
    id: 571,
    proverb: "Whoever increases wealth by taking interest or profit from the poor amasses it for another, who will be kind to the poor."
  },
  {
    id: 572,
    proverb: "If anyone turns a deaf ear to my instruction, even their prayers are detestable."
  },
  {
    id: 573,
    proverb: "Whoever leads the upright along an evil path will fall into their own trap, but the blameless will receive a good inheritance."
  },
  {
    id: 574,
    proverb: "The rich are wise in their own eyes; one who is poor and discerning sees how deluded they are."
  },
  {
    id: 575,
    proverb: "When the righteous triumph, there is great elation; but when the wicked rise to power, people go into hiding."
  },
  {
    id: 576,
    proverb: "Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy."
  },
  {
    id: 577,
    proverb: "Blessed is the one who always trembles before God, but whoever hardens their heart falls into trouble."
  },
  {
    id: 578,
    proverb: "Like a roaring lion or a charging bear is a wicked ruler over a helpless people."
  },
  {
    id: 579,
    proverb: "A tyrannical ruler practices extortion, but one who hates ill-gotten gain will enjoy a long reign."
  },
  {
    id: 580,
    proverb: "Anyone tormented by the guilt of murder will seek refuge in the grave; let no one hold them back."
  },
  {
    id: 581,
    proverb: "The one whose walk is blameless is kept safe, but the one whose ways are perverse will fall into the pit."
  },
  {
    id: 582,
    proverb: "Those who work their land will have abundant food, but those who chase fantasies will have their fill of poverty."
  },
  {
    id: 583,
    proverb: "A faithful person will be richly blessed, but one eager to get rich will not go unpunished."
  },
  {
    id: 584,
    proverb: "To show partiality is not good— yet a person will do wrong for a piece of bread."
  },
  {
    id: 585,
    proverb: "The stingy are eager to get rich and are unaware that poverty awaits them."
  },
  {
    id: 586,
    proverb: "Whoever rebukes a person will in the end gain favor rather than one who has a flattering tongue."
  },
  {
    id: 587,
    proverb: "Whoever robs their father or mother and says, “It's not wrong,” is partner to one who destroys."
  },
  {
    id: 588,
    proverb: "The greedy stir up conflict, but those who trust in the Lord will prosper."
  },
  {
    id: 589,
    proverb: "Those who trust in themselves are fools, but those who walk in wisdom are kept safe."
  },
  {
    id: 590,
    proverb: "Those who give to the poor will lack nothing, but those who close their eyes to them receive many curses."
  },
  {
    id: 591,
    proverb: "When the wicked rise to power, people go into hiding; but when the wicked perish, the righteous thrive."
  },
  {
    id: 592,
    proverb: "Whoever remains stiff-necked after many rebukes will suddenly be destroyed—without remedy."
  },
  {
    id: 593,
    proverb: "When the righteous thrive, the people rejoice; when the wicked rule, the people groan."
  },
  {
    id: 594,
    proverb: "A man who loves wisdom brings joy to his father, but a companion of prostitutes squanders his wealth."
  },
  {
    id: 595,
    proverb: "By justice a king gives a country stability, but those who are greedy for bribes tear it down."
  },
  {
    id: 596,
    proverb: "Those who flatter their neighbors are spreading nets for their feet."
  },
  {
    id: 597,
    proverb: "Evildoers are snared by their own sin, but the righteous shout for joy and are glad."
  },
  {
    id: 598,
    proverb: "The righteous care about justice for the poor, but the wicked have no such concern."
  },
  {
    id: 599,
    proverb: "Mockers stir up a city, but the wise turn away anger."
  },
  {
    id: 600,
    proverb: "If a wise person goes to court with a fool, the fool rages and scoffs, and there is no peace."
  },
  {
    id: 601,
    proverb: "The bloodthirsty hate a person of integrity and seek to kill the upright."
  },
  {
    id: 602,
    proverb: "Fools give full vent to their rage, but the wise bring calm in the end."
  },
  {
    id: 603,
    proverb: "If a ruler listens to lies, all his officials become wicked."
  },
  {
    id: 604,
    proverb: "The poor and the oppressor have this in common: The Lord gives sight to the eyes of both."
  },
  {
    id: 605,
    proverb: "If a king judges the poor with fairness, his throne will be established forever."
  },
  {
    id: 606,
    proverb: "A rod and a reprimand impart wisdom, but a child left undisciplined disgraces its mother."
  },
  {
    id: 607,
    proverb: "When the wicked thrive, so does sin, but the righteous will see their downfall."
  },
  {
    id: 608,
    proverb: "Discipline your children, and they will give you peace; they will bring you the delights you desire."
  },
  {
    id: 609,
    proverb: "Where there is no revelation, people cast off restraint; but blessed is the one who heeds wisdom's instruction."
  },
  {
    id: 610,
    proverb: "Servants cannot be corrected by mere words; though they understand, they will not respond."
  },
  {
    id: 611,
    proverb: "Do you see someone who speaks in haste? There is more hope for a fool than for them."
  },
  {
    id: 612,
    proverb: "A servant pampered from youth will turn out to be insolent."
  },
  {
    id: 613,
    proverb: "An angry person stirs up conflict, and a hot- tempered person commits many sins."
  },
  {
    id: 614,
    proverb: "Pride brings a person low, but the lowly in spirit gain honor."
  },
  {
    id: 615,
    proverb: "The accomplices of thieves are their own enemies; they are put under oath and dare not testify."
  },
  {
    id: 616,
    proverb: "Fear of man will prove to be a snare, but whoever trusts in the Lord is kept safe."
  },
  {
    id: 617,
    proverb: "Many seek an audience with a ruler, but it is from the Lord that one gets justice."
  },
  {
    id: 618,
    proverb: "The righteous detest the dishonest; the wicked detest the upright."
  },
  {
    id: 619,
    proverb: "“I am weary, God, but I can prevail. Surely I am only a brute, not a man; I do not have human understanding. I have not learned wisdom, nor have I attained to the knowledge of the Holy One. Who has gone up to heaven and come down? Whose hands have gathered up the wind? Who has wrapped up the waters in a cloak? Who has established all the ends of the earth? What is his name, and what is the name of his son? Surely you know!"
  },
  {
    id: 620,
    proverb: "“Every word of God is flawless; he is a shield to those who take refuge in him. Do not add to his words, or he will rebuke you and prove you a liar."
  },
  {
    id: 621,
    proverb: "“Two things I ask of you, Lord; do not refuse me before I die: Keep falsehood and lies far from me; give me neither poverty nor riches, but give me only my daily bread. Otherwise, I may have too much and disown you and say, ‘Who is the Lord?’ Or I may become poor and steal, and so dishonor the name of my God."
  },
  {
    id: 622,
    proverb: "“Do not slander a servant to their master, or they will curse you, and you will pay for it."
  },
  {
    id: 623,
    proverb: "“There are those who curse their fathers and do not bless their mothers; those who are pure in their own eyes and yet are not cleansed of their filth; those whose eyes are ever so haughty, whose glances are so disdainful; those whose teeth are swords and whose jaws are set with knives to devour the poor from the earth and the needy from among mankind."
  },
  {
    id: 624,
    proverb: "“The leech has two daughters. 'Give! Give!' they cry. “There are three things that are never satisfied, four that never say, 'Enough!': the grave, the barren womb, land, which is never satisfied with water, and fire, which never says, 'Enough!'"
  },
  {
    id: 625,
    proverb: "“The eye that mocks a father, that scorns an aged mother, will be pecked out by the ravens of the valley, will be eaten by the vultures."
  },
  {
    id: 626,
    proverb: "“There are three things that are too amazing for me, four that I do not understand: the way of an eagle in the sky, the way of a snake on a rock, the way of a ship on the high seas, and the way of a man with a young woman."
  },
  {
    id: 627,
    proverb: "“This is the way of an adulterous woman: She eats and wipes her mouth and says, 'I've done nothing wrong.'"
  },
  {
    id: 628,
    proverb: "“Under three things the earth trembles, under four it cannot bear up: a servant who becomes king, a godless fool who gets plenty to eat, a contemptible woman who gets married, and a servant who displaces her mistress."
  },
  {
    id: 629,
    proverb: "“Four things on earth are small, yet they are extremely wise: Ants are creatures of little strength, yet they store up their food in the summer; hyraxes are creatures of little power, yet they make their home in the crags; locusts have no king, yet they advance together in ranks; a lizard can be caught with the hand, yet it is found in kings' palaces."
  },
  {
    id: 630,
    proverb: "“There are three things that are stately in their stride, four that move with stately bearing: a lion, mighty among beasts, who retreats before nothing; a strutting rooster, a he-goat, and a king secure against revolt."
  },
  {
    id: 631,
    proverb: "“If you play the fool and exalt yourself, or if you plan evil, clap your hand over your mouth! For as churning cream produces butter, and as twisting the nose produces blood, so stirring up anger produces strife."
  },
  {
    id: 632,
    proverb: "Listen, my son! Listen, son of my womb! Listen, my son, the answer to my prayers! Do not spend your strength on women, your vigor on those who ruin kings."
  },
  {
    id: 633,
    proverb: "It is not for kings, Lemuel— it is not for kings to drink wine, not for rulers to crave beer, lest they drink and forget what has been decreed, and deprive all the oppressed of their rights. Let beer be for those who are perishing, wine for those who are in anguish! Let them drink and forget their poverty and remember their misery no more."
  },
  {
    id: 634,
    proverb: "Speak up for those who cannot speak for themselves, for the rights of all who are destitute. Speak up and judge fairly; defend the rights of the poor and needy."
  },
  {
    id: 635,
    proverb: "A wife of noble character who can find? She is worth far more than rubies. Her husband has full confidence in her and lacks nothing of value. She brings him good, not harm, all the days of her life."
  },
  {
    id: 636,
    proverb: "She [wife of noble character] selects wool and flax and works with eager hands. She is like the merchant ships, bringing her food from afar."
  },
  {
    id: 637,
    proverb: "She [wife of noble character] gets up while it is still night; she provides food for her family and portions for her female servants. She considers a field and buys it; out of her earnings she plants a vineyard."
  },
  {
    id: 638,
    proverb: "She [wife of noble character] sets about her work vigorously; her arms are strong for her tasks. She sees that her trading is profitable, and her lamp does not go out at night."
  },
  {
    id: 639,
    proverb: "In her [wife of noble character] hand she holds the distaff and grasps the spindle with her fingers. She opens her arms to the poor and extends her hands to the needy."
  },
  {
    id: 640,
    proverb: "When it snows, she [wife of noble character] has no fear for her household; for all of them are clothed in scarlet. She makes coverings for her bed; she is clothed in fine linen and purple."
  },
  {
    id: 641,
    proverb: "Her [wife of noble character] husband is respected at the city gate, where he takes his seat among the elders of the land. She makes linen garments and sells them, and supplies the merchants with sashes."
  },
  {
    id: 642,
    proverb: "She [wife of noble character] is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue."
  },
  {
    id: 643,
    proverb: "She [wife of noble character] watches over the affairs of her household and does not eat the bread of idleness. Her children arise and call her blessed; her husband also, and he praises her: “Many women do noble things, but you surpass them all.”"
  },
  {
    id: 644,
    proverb: "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised. Honor her for all that her hands have done, and let her works bring her praise at the city gate."
  },
];

Shuffle.pick(PROVERBS, { 'picks': 1 });
console.log(Shuffle.pick(PROVERBS, { 'picks': 1 }));



module.exports = Shuffle;