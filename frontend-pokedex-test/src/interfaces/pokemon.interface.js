
import PropTypes from "prop-types";

let _Pokemon;
let _Ability;
let _Species;
let _Cries;
let _GameIndex;
let _HeldItem;
let _VersionDetail;
let _Move;
let _VersionGroupDetail;
let _GenerationV;
let _GenerationIv;
let _Versions;
let _Other;
let _Sprites;
let _GenerationI;
let _RedBlue;
let _GenerationIi;
let _Crystal;
let _Gold;
let _GenerationIii;
let _OfficialArtwork;
let _Home;
let _GenerationVii;
let _DreamWorld;
let _GenerationViii;
let _Stat;
let _Type;
_Type = PropTypes.shape({
    "slot": PropTypes.number,
    "type": _Species,
});
_Stat = PropTypes.shape({
    "base_stat": PropTypes.number,
    "effort": PropTypes.number,
    "stat": _Species,
});
_GenerationViii = PropTypes.shape({
    "icons": _DreamWorld,
});
_DreamWorld = PropTypes.shape({
    "front_default": PropTypes.string,
    "front_female": PropTypes.any,
});
_GenerationVii = PropTypes.shape({
    "icons": _DreamWorld,
    "ultra-sun-ultra-moon": _Home,
});
_Home = PropTypes.shape({
    "front_default": PropTypes.string,
    "front_female": PropTypes.any,
    "front_shiny": PropTypes.string,
    "front_shiny_female": PropTypes.any,
});
_OfficialArtwork = PropTypes.shape({
    "front_default": PropTypes.string,
    "front_shiny": PropTypes.string,
});
_GenerationIii = PropTypes.shape({
    "emerald": _OfficialArtwork,
    "firered-leafgreen": _Gold,
    "ruby-sapphire": _Gold,
});
_Gold = PropTypes.shape({
    "back_default": PropTypes.string,
    "back_shiny": PropTypes.string,
    "front_default": PropTypes.string,
    "front_shiny": PropTypes.string,
    "front_transparent": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
});
_Crystal = PropTypes.shape({
    "back_default": PropTypes.string,
    "back_shiny": PropTypes.string,
    "back_shiny_transparent": PropTypes.string,
    "back_transparent": PropTypes.string,
    "front_default": PropTypes.string,
    "front_shiny": PropTypes.string,
    "front_shiny_transparent": PropTypes.string,
    "front_transparent": PropTypes.string,
});
_GenerationIi = PropTypes.shape({
    "crystal": _Crystal,
    "gold": _Gold,
    "silver": _Gold,
});
_RedBlue = PropTypes.shape({
    "back_default": PropTypes.string,
    "back_gray": PropTypes.string,
    "back_transparent": PropTypes.string,
    "front_default": PropTypes.string,
    "front_gray": PropTypes.string,
    "front_transparent": PropTypes.string,
});
_GenerationI = PropTypes.shape({
    "red-blue": _RedBlue,
    "yellow": _RedBlue,
});
_Sprites = PropTypes.shape({
    "back_default": PropTypes.string,
    "back_female": PropTypes.any,
    "back_shiny": PropTypes.string,
    "back_shiny_female": PropTypes.any,
    "front_default": PropTypes.string,
    "front_female": PropTypes.any,
    "front_shiny": PropTypes.string,
    "front_shiny_female": PropTypes.any,
    "other": PropTypes.oneOfType([_Other, PropTypes.any]),
    "versions": PropTypes.oneOfType([_Versions, PropTypes.any]),
    "animated": PropTypes.oneOfType([_Sprites, PropTypes.any]),
});
_Other = PropTypes.shape({
    "dream_world": _DreamWorld,
    "home": _Home,
    "official-artwork": _OfficialArtwork,
    "showdown": _Sprites,
});
_Versions = PropTypes.shape({
    "generation-i": _GenerationI,
    "generation-ii": _GenerationIi,
    "generation-iii": _GenerationIii,
    "generation-iv": _GenerationIv,
    "generation-v": _GenerationV,
    "generation-vi": PropTypes.object,
    "generation-vii": _GenerationVii,
    "generation-viii": _GenerationViii,
});
_GenerationIv = PropTypes.shape({
    "diamond-pearl": _Sprites,
    "heartgold-soulsilver": _Sprites,
    "platinum": _Sprites,
});
_GenerationV = PropTypes.shape({
    "black-white": _Sprites,
});
_VersionGroupDetail = PropTypes.shape({
    "level_learned_at": PropTypes.number,
    "move_learn_method": _Species,
    "version_group": _Species,
});
_Move = PropTypes.shape({
    "move": _Species,
    "version_group_details": PropTypes.arrayOf(_VersionGroupDetail),
});
_VersionDetail = PropTypes.shape({
    "rarity": PropTypes.number,
    "version": _Species,
});
_HeldItem = PropTypes.shape({
    "item": _Species,
    "version_details": PropTypes.arrayOf(_VersionDetail),
});
_GameIndex = PropTypes.shape({
    "game_index": PropTypes.number,
    "version": _Species,
});
_Cries = PropTypes.shape({
    "latest": PropTypes.string,
    "legacy": PropTypes.string,
});
_Species = PropTypes.shape({
    "name": PropTypes.string,
    "url": PropTypes.string,
});
_Ability = PropTypes.shape({
    "ability": _Species,
    "is_hidden": PropTypes.bool,
    "slot": PropTypes.number,
});
_Pokemon = PropTypes.shape({
    "abilities": PropTypes.arrayOf(_Ability),
    "base_experience": PropTypes.number,
    "cries": _Cries,
    "forms": PropTypes.arrayOf(_Species),
    "game_indices": PropTypes.arrayOf(_GameIndex),
    "height": PropTypes.number,
    "held_items": PropTypes.arrayOf(_HeldItem),
    "id": PropTypes.number,
    "is_default": PropTypes.bool,
    "location_area_encounters": PropTypes.string,
    "moves": PropTypes.arrayOf(_Move),
    "name": PropTypes.string,
    "order": PropTypes.number,
    "past_abilities": PropTypes.arrayOf(PropTypes.any),
    "past_types": PropTypes.arrayOf(PropTypes.any),
    "species": _Species,
    "sprites": _Sprites,
    "stats": PropTypes.arrayOf(_Stat),
    "types": PropTypes.arrayOf(_Type),
    "weight": PropTypes.number,
});

export const Pokemon = _Pokemon;
