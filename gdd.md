# Ruby's Woods

## Title Page

## Story

### Synopsis

Ruby is a teenager venturing out on her own for the first time to bring medicine to her sick grandmother who lives in a cabin in the woods. On her way, she will need to pick up ingredients and make allies of the local wildlife.

### Theme

The intention is to make a 2D RPG with a character that is too inexperienced to be able to fight the threats she encounters, and is forced to explore different styles of conflict resolution to navigate a world of dangers.

The dangers, and the darkness of the world will increase as the character matures and becomes more familiar with the world.

### Progression

Ruby will randomly encounter the animals of the forest, and have options that may enable her to invite animals to her party. Adding allies will increase her access to items in unreachable parts of the maps, but require her to make decisions around interpersonal conflicts between the animals, like a goat/fox/chicken puzzle.


## Gameplay

### Goal

Ruby's goal is to find all of the ingredients from her mother's list in the woods, and take them to her grandmother's house

### Game Mechanics

The game involves open exploration of a map, with regions that are accessible only by other animals. The animals are encountered randomly as Ruby moves, and initiate a pacifist take on turn-based combat.

In these combats, Ruby will only be able to choose her own actions, and animals that have become part of her party will act independently, sometimes undermining her contact with different species

Ruby's options still need to be fleshed out, but could include:

- Hold still
- Use item (collected foods/herbs/flowers/objects)
- imitate animal noises
- ????

### Player

#### Description

Ruby is a kid, allowed to go into the world alone for the first time. She has a mission, the confidence of her mother, and a grandmother depending on her success, but is still enjoying being an adventurer.

In the style of many child-as-hero stories, she is actually unequipped to deal with the full danger of her environment. Combat options will generally kill her very quickly (resulting in a faint that takes her back to her mother's house without any of her collected items)

#### Controls

Ruby will have standard up/down/left/right movement through space, like any classic RPG. Her combat options will be in a menu, and turn-based

### World

The woods that Ruby explores will have some different height levels, accessible through sloped tiles, and create unsurpassable cliff edges. The trees will be numerous and only traversable my tree-dwelling animals, who can access the canopy layer. There will also be streams and ponds which can only be traversed by water-dwelling animals.

### NPC's / Enemies

#### Speaking characters

1. Ruby's mother: The somber manifestation of the fully competent entity that Ruby strives to be. She will do the exposition at the beginning that hints at the danger and necessity of Ruby's quest, while showing that she believes Ruby is up to the challenge.

2. The Woodsman: This is actually the first character that you encounter during the game. He is condescending to Ruby, but will also join her party. If he does, no other animals will join, but he is flakey, and will periodically disappear anyway. No matter what, he reappears at the Grandmother's house once Ruby has explored it.

3. Grandmother: We will never actually see her, as she will have disappeared by the time Ruby returns to her home with all the ingredients, but will experience her through dialogues (maybe through the wall of the locked house), and the letter and spellbook that she has left for Ruby

#### Types of Animals

Animals are the "enemies" of the game, but will be neutral, responding aggressively to aggression, depending on their own personalities.]

May add a day/night mechanic to change availability of animals in the party.

1. Frog
Terrain: Water
Refuse Ally: None
Scares: None

2. Squirrel
Terrain: Trees
Refuse Ally: Owl, Wolf
Scares: None

3. Owl
Terrain: Air
Refuse Ally: Wolf
Scares: Squirrel

4. Goat
Terrain: Cliffs
Refuse Ally: Wolf
Scares: None

5. Wolf
Terrain: Land
Does not cooperate with:



### Progression and Challenge

The game requires Ruby to continually change the composition of her party, in order to have members who can pass terrain without encountering lots of random combats, and who can cross terrain to retrieve the items that Ruby sees but cannot access.

### Losing

Ruby can only take damage from combats, and will be reset to her mother's home without any of the items that were not yet delivered to her grandmother's house.


## Art Style

Limited pallette pixel art, in the style of Chrono Trigger and the classic JRPG's

## Music and Sounds

1. Woods Theme: Bright, optimistic, with a minor hint of the danger lurking in the darkness.
2. Combat music: Needs to express the ambiguity and multiplicity of ways to handle the situation

Sound Effects
- Sounds for each of the Animals
- Faint wolf howls in the distance

## Technical Specs

I am still deciding on a game engine, but the current plan is to use MelonJS to build the base as a stateless web game, and then use Electron to create downloadable exports for Windows, Linux, and Mac. This will depend on whether or not the first level surpasses browswer-playable rendering demands, but web is ideal for the demo.

Phaser.io and CocosJS are possible engine alternatives as well.

## Monetization

Create a demo, put it on itch, beg for donations
