import React from 'react';
import './App.css'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      label: "Select an Option Below!",
      req: " ",
      imgSrc: require('./images/plumbob.png'),
    }

    this.handleToddlerButtonClicked = this.handleToddlerButtonClicked.bind(this);
    this.handlePersonalityTraitsButtonClicked = this.handlePersonalityTraitsButtonClicked.bind(this);
    this.handleChildAspirationButtonClicked = this.handleChildAspirationButtonClicked.bind(this);
    this.handleAspirationButtonClicked = this.handleAspirationButtonClicked.bind(this);
  }

  handleToddlerButtonClicked(e) {
    var randomValue = Math.floor(Math.random() * 8) + 1;

    this.setState({req:" "});
    
    switch(randomValue) {
      case 1: this.setState({label: "Angelic", imgSrc: require('./images/toddler_traits/1_angelic.png')}); break;
      case 2: this.setState({label: "Charmer", imgSrc: require('./images/toddler_traits/2_charmer.png')}); break;
      case 3: this.setState({label: "Clingy", imgSrc: require('./images/toddler_traits/3_clingy.png')}); break;
      case 4: this.setState({label: "Fussy", imgSrc: require('./images/toddler_traits/4_fussy.png')}); break;
      case 5: this.setState({label: "Independent", imgSrc: require('./images/toddler_traits/5_independent.png')}); break;
      case 6: this.setState({label: "Inquisitive", imgSrc: require('./images/toddler_traits/6_inquisitive.png')}); break;
      case 7: this.setState({label: "Silly", imgSrc: require('./images/toddler_traits/7_silly.png')}); break;
      case 8: this.setState({label: "Wild", imgSrc: require('./images/toddler_traits/8_wild.png')}); break;
      default: break;
    }
    
  }

  handlePersonalityTraitsButtonClicked(e) {
    var randomValue = Math.floor(Math.random() * 48) + 1;

    this.setState({req:" "});
    
    switch(randomValue) {
      case 1: this.setState({label: "Active", imgSrc: require('./images/personality_traits/1_active.png')}); break;
      case 2: this.setState({label: "Cheerful", imgSrc: require('./images/personality_traits/2_cheerful.png')}); break;
      case 3: this.setState({label: "Creative", imgSrc: require('./images/personality_traits/3_creative.png')}); break;
      case 4: this.setState({label: "Genius", imgSrc: require('./images/personality_traits/4_genius.png')}); break;
      case 5: this.setState({label: "Gloomy", imgSrc: require('./images/personality_traits/5_gloomy.png')}); break;
      case 6: this.setState({label: "Goofball", imgSrc: require('./images/personality_traits/6_goofball.png')}); break;
      case 7: this.setState({label: "Hot-headed", imgSrc: require('./images/personality_traits/7_hot-headed.png')}); break;
      case 8: this.setState({label: "Romantic", imgSrc: require('./images/personality_traits/8_romantic.png')}); break;
      case 9: this.setState({label: "Self-Assured", imgSrc: require('./images/personality_traits/9_self-assured.png')}); break;
      // Requires City Living
      case 10: this.setState({label: "Unflirty", req: "City Living", imgSrc: require('./images/personality_traits/10_unflirty.png')}); break;
      case 11: this.setState({label: "Art Lover", imgSrc: require('./images/personality_traits/11_art_lover.png')}); break;
      case 12: this.setState({label: "Bookworm", imgSrc: require('./images/personality_traits/12_bookworm.png')}); break;
      case 13: this.setState({label: "Foodie", imgSrc: require('./images/personality_traits/13_foodie.png')}); break;
      case 14: this.setState({label: "Geek", imgSrc: require('./images/personality_traits/14_geek.png')}); break;
      case 15: this.setState({label: "Music Lover", imgSrc: require('./images/personality_traits/15_music_lover.png')}); break;
      case 16: this.setState({label: "Perfectionist", imgSrc: require('./images/personality_traits/16_perfectionist.png')}); break;
      case 17: this.setState({label: "Ambitious", imgSrc: require('./images/personality_traits/17_ambitious.png')}); break;
      // Requires Cats & Dogs
      case 18: this.setState({label: "Cat Lover", req: "Cats & Dogs", imgSrc: require('./images/personality_traits/18_cat_lover.png')}); break;
      // Requires Island Living
      case 19: this.setState({label: "Child of the Islands", req: "Island Living", imgSrc: require('./images/personality_traits/19_child_of_the_islands.png')}); break;
      // Requires Island Living
      case 20: this.setState({label: "Child of the Ocean", req:"Island Living", imgSrc: require('./images/personality_traits/20_child_of_the_ocean.png')}); break;
      case 21: this.setState({label: "Childish", imgSrc: require('./images/personality_traits/21_childish.png')}); break;
      case 22: this.setState({label: "Clumsy", imgSrc: require('./images/personality_traits/22_clumsy.png')}); break;
      // Requires Get Together
      case 23: this.setState({label: "Dance Machine", req:"Get Together", imgSrc: require('./images/personality_traits/23_dance_machine.png')}); break;
      // Requires Cats & Dogs
      case 24: this.setState({label: "Dog Lover", req:"Cats & Dogs", imgSrc: require('./images/personality_traits/24_dog_lover.png')}); break;
      case 25: this.setState({label: "Erratic", imgSrc: require('./images/personality_traits/25_erratic.png')}); break;
      case 26: this.setState({label: "Glutton", imgSrc: require('./images/personality_traits/26_glutton.png')}); break;
      case 27: this.setState({label: "Kleptomaniac", imgSrc: require('./images/personality_traits/27_kleptomaniac.png')}); break;
      case 28: this.setState({label: "Lazy", imgSrc: require('./images/personality_traits/28_lazy.png')}); break;
      case 29: this.setState({label: "Loves Outdoors", imgSrc: require('./images/personality_traits/29_loves_outdoors.png')}); break;
      case 30: this.setState({label: "Materialistic", imgSrc: require('./images/personality_traits/30_materialistic.png')}); break;
      case 31: this.setState({label: "Neat", imgSrc: require('./images/personality_traits/31_neat.png')}); break;
      case 32: this.setState({label: "Slob", imgSrc: require('./images/personality_traits/32_slob.png')}); break;
      case 33: this.setState({label: "Snob", imgSrc: require('./images/personality_traits/33_snob.png')}); break;
      // Requires Outdoor Retreat
      case 34: this.setState({label: "Squeamish", req:"Outdoor Retreat", imgSrc: require('./images/personality_traits/34_squeamish.png')}); break;
      // Requires City Living
      case 35: this.setState({label: "Vegetarian", req: "City Living", imgSrc: require('./images/personality_traits/35_vegetarian.png')}); break;
      case 36: this.setState({label: "Bro", imgSrc: require('./images/personality_traits/36_bro.png')}); break;
      case 37: this.setState({label: "Evil", imgSrc: require('./images/personality_traits/37_evil.png')}); break;
      case 38: this.setState({label: "Family-Orientated", imgSrc: require('./images/personality_traits/38_family-orientated.png')}); break;
      case 39: this.setState({label: "Good", imgSrc: require('./images/personality_traits/39_good.png')}); break;
      case 40: this.setState({label: "Hates Children", imgSrc: require('./images/personality_traits/40_hates_children.png')}); break;
      // Requires Get Together
      case 41: this.setState({label: "Insider", req:"Get Together", imgSrc: require('./images/personality_traits/41_insider.png')}); break;
      case 42: this.setState({label: "Jealous", imgSrc: require('./images/personality_traits/42_jealous.png')}); break;
      case 43: this.setState({label: "Loner", imgSrc: require('./images/personality_traits/43_loner.png')}); break;
      case 44: this.setState({label: "Mean", imgSrc: require('./images/personality_traits/44_mean.png')}); break;
      case 45: this.setState({label: "Noncommital", imgSrc: require('./images/personality_traits/45_noncommital.png')}); break;
      case 46: this.setState({label: "Outgoing", imgSrc: require('./images/personality_traits/46_outgoing.png')}); break;
      // Requires Strangerville
      case 47: this.setState({label: "Paranoid", req:"StangerVille", imgSrc: require('./images/personality_traits/47_paranoid.png')}); break;
      // Requires Get Famous
      case 48: this.setState({label: "Self-Assured", req:"Get Famous", imgSrc: require('./images/personality_traits/48_self-absorbed.png')}); break;
      default: break;
    }

  }

  handleChildAspirationButtonClicked(e) {
    var randomValue = Math.floor(Math.random() * 4) + 1;

    this.setState({req:" "});
    
    switch(randomValue) {
      case 1: this.setState({label: "Artistic Prodigy", imgSrc: require('./images/child_aspirations/1_artisticProdigy.png')}); break;
      case 2: this.setState({label: "Rambunctious Scamp", imgSrc: require('./images/child_aspirations/2_rambunctiousScamp.png')}); break;
      case 3: this.setState({label: "Social Butterfly", imgSrc: require('./images/child_aspirations/3_socialButterfly.png')}); break;
      case 4: this.setState({label: "Whiz Kid", imgSrc: require('./images/child_aspirations/4_whizKid.png')}); break;
      default: break;
    }
  }

  handleAspirationButtonClicked(e) {
    var randomValue = Math.floor(Math.random() * 40) + 1;

    this.setState({req:" "});
    
    switch(randomValue) {
      // Requires Cats & Dogs
      case 1: this.setState({label: "Friend of the Animals", req:"Cats & Dogs", imgSrc: require('./images/aspirations/1_friend_of_the_animals.png')}); break;
      case 2: this.setState({label: "Bodybuilder", imgSrc: require('./images/aspirations/2_bodybuilder.png')}); break;
      case 3: this.setState({label: "Painter Extraordinare", imgSrc: require('./images/aspirations/3_painter_extraordinare.png')}); break;
      case 4: this.setState({label: "Musical Genius", imgSrc: require('./images/aspirations/4_musical_genius.png')}); break;
      case 5: this.setState({label: "Bestselling Author", imgSrc: require('./images/aspirations/5_bestselling_author.png')}); break;
      // Requires Get Famous
      case 6: this.setState({label: "Master Actor/Actress", req:"Get Famous", imgSrc: require('./images/aspirations/6_master_actor.png')}); break;
      case 7: this.setState({label: "Public Enemy", imgSrc: require('./images/aspirations/7_public_enemy.png')}); break;
      case 8: this.setState({label: "Chief of Mischief", imgSrc: require('./images/aspirations/8_chief_of_mischief.png')}); break;
      case 9: this.setState({label: "Successful Lineage", imgSrc: require('./images/aspirations/9_successful_lineage.png')}); break;
      case 10: this.setState({label: "Big Happy Family", imgSrc: require('./images/aspirations/10_big_happy_family.png')}); break;
      // Requires Vampires
      case 11: this.setState({label: "Vampire Family", req:"Vampires", imgSrc: require('./images/aspirations/11_vampire_family.png')}); break;
      // Requires Parenthood
      case 12: this.setState({label: "Super Parent", req:"Parenthood", imgSrc: require('./images/aspirations/12_super_parent.png')}); break;
      case 13: this.setState({label: "Master Chef", imgSrc: require('./images/aspirations/13_master_chef.png')}); break;
      case 14: this.setState({label: "Master Mixologist", imgSrc: require('./images/aspirations/14_master_mixologist.png')}); break;
      case 15: this.setState({label: "Fabulously Wealthy", imgSrc: require('./images/aspirations/15_fabulously_wealthy.png')}); break;
      case 16: this.setState({label: "Mansion Baron", imgSrc: require('./images/aspirations/16_mansion_baron.png')}); break;
      case 17: this.setState({label: "Renaissance Sim", imgSrc: require('./images/aspirations/17_renaissance_sim.png')}); break;
      case 18: this.setState({label: "Nerd Brain", imgSrc: require('./images/aspirations/18_nerd_brain.png')}); break;
      case 19: this.setState({label: "Computer Whiz", imgSrc: require('./images/aspirations/19_computer_whiz.png')}); break;
      // Requires Vampires
      case 20: this.setState({label: "Master Vampire", req:"Vampires", imgSrc: require('./images/aspirations/20_master_vampire.png')}); break;
      // Requires Jungle Adventure
      case 21: this.setState({label: "Archaeology Scholar", req:"Jungle Adventure", imgSrc: require('./images/aspirations/21_archaeology_scholar.png')}); break;
      // Requires Realm of Magic
      case 22: this.setState({label: "Spellcraft & Sorcery", req: "realm of Magic", imgSrc: require('./images/aspirations/22_spellcraft_&_sorcery.png')}); break;
      case 23: this.setState({label: "Serial Romantic", imgSrc: require('./images/aspirations/23_serial_romantic.png')}); break;
      case 24: this.setState({label: "Soulmate", imgSrc: require('./images/aspirations/24_soulmate.png')}); break;
      // Requires City Living
      case 25: this.setState({label: "City Native", req:"City Living", imgSrc: require('./images/aspirations/25_city_native.png')}); break;
      // Requires StrangerVille
      case 26: this.setState({label: "StrangerVille Mystery", req:"StrangerVille", imgSrc: require('./images/aspirations/26_strangerville_mystery.png')}); break;
      // Requires Island Living
      case 27: this.setState({label: "Beach Life", req:"Island Living", imgSrc: require('./images/aspirations/27_beach_life.png')}); break;
      case 28: this.setState({label: "Freelance Botanist", imgSrc: require('./images/aspirations/28_freelance_botanist.png')}); break;
      case 29: this.setState({label: "The Curator", imgSrc: require('./images/aspirations/29_the_curator.png')}); break;
      case 30: this.setState({label: "Angling Ace", imgSrc: require('./images/aspirations/30_angling_ace.png')}); break;
      // Requires Outdoor Retreat
      case 31: this.setState({label: "Outdoor Enthusiast", req:"Outdoor Retreat", imgSrc: require('./images/aspirations/31_outdoor_enthusiast.png')}); break;
      // Requires Jungle Adventure
      case 32: this.setState({label: "Jungle Explorer", imgSrc: require('./images/aspirations/32_jungle_explorer.png')}); break;
      // Requires Realm of Magic
      case 33: this.setState({label: "Purveyor of Potions", req:"Realm of Magic", imgSrc: require('./images/aspirations/33_purveyor_of_potions.png')}); break;
      case 34: this.setState({label: "Joke Star", imgSrc: require('./images/aspirations/34_joke_star.png')}); break;
      case 35: this.setState({label: "Party Animal", imgSrc: require('./images/aspirations/35_party_animal.png')}); break;
      case 36: this.setState({label: "Friend of the World", imgSrc: require('./images/aspirations/36_friend_of_the_world.png')}); break;
      // Requires Get Together
      case 37: this.setState({label: "Leader of the Pack", req:"Get Together", imgSrc: require('./images/aspirations/37_leader_of_the_pack.png')}); break;
      // Requires Vampires
      case 38: this.setState({label: "Good Vampire", req:"Vampires", imgSrc: require('./images/aspirations/38_good_vampire.png')}); break;
      // Requires Get Famous
      case 39: this.setState({label: "World-Famous Celebrity", req:"Get Famous", imgSrc: require('./images/aspirations/39_world-famous_celebrity.png')}); break;
      default: break;
    }

  }
  
  render() {

    return(
      <div class="container">
        <img src={this.state.imgSrc} alt="" style={{width: 256, height: 256, alignSelf: 'center'}}></img>
        <h3>{this.state.label}</h3>
        <h4>{this.state.req}</h4>
        <button class="btn btn-primary btn-block" onClick={this.handleToddlerButtonClicked}>
          Generate Toddler Trait
        </button>
        <button class="btn btn-primary btn-block" onClick={this.handlePersonalityTraitsButtonClicked}>
          Generate Personality Trait
        </button>
        <button class="btn btn-primary btn-block" onClick={this.handleChildAspirationButtonClicked}>
          Generate Child Aspiration
        </button>
        <button class="btn btn-primary btn-block" onClick={this.handleAspirationButtonClicked}>
          Generate Aspiration
        </button>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <Button label="Button"/>
    </div>
  );
}
*/

export default App;
