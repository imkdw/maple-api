export declare namespace MapleOpenApi {
  export namespace GetOcid {
    export interface Response {
      ocid: string;
    }
  }

  export namespace GetBasic {
    export interface Response {
      date: string;
      character_name: string;
      world_name: string;
      character_gender: string;
      character_class: string;
      character_class_level: string;
      character_level: number;
      character_exp: number;
      character_exp_rate: string;
      character_guild_name: string;
      character_image: string;
    }
  }

  export namespace GetItemEquipment {
    export interface Response {
      date: string;
      character_gender: string;
      character_class: string;
      preset_no: number;
      item_equipment: [
        {
          item_equipment_part: string;
          equipment_slot: string;
          item_name: string;
          item_icon: string;
          item_description: string;
          item_shape_name: string;
          item_shape_icon: string;
          gender: string;
          item_total_option: {
            str: string;
            dex: string;
            int: string;
            luk: string;
            max_hp: string;
            max_mp: string;
            attack_power: string;
            magic_power: string;
            armor: string;
            speed: string;
            jump: string;
            boss_damage: string;
            ignore_monster_armor: string;
            all_stat: string;
            damage: string;
            equipment_level_decrease: number;
            max_hp_rate: string;
            max_mp_rate: string;
          };
          item_base_option: {
            str: string;
            dex: string;
            int: string;
            luk: string;
            max_hp: string;
            max_mp: string;
            attack_power: string;
            magic_power: string;
            armor: string;
            speed: string;
            jump: string;
            boss_damage: string;
            ignore_monster_armor: string;
            all_stat: string;
            max_hp_rate: string;
            max_mp_rate: string;
            base_equipment_level: number;
          };
          potential_option_grade: string;
          additional_potential_option_grade: string;
          potential_option_1: string;
          potential_option_2: string;
          potential_option_3: string;
          additional_potential_option_1: string;
          additional_potential_option_2: string;
          additional_potential_option_3: string;
          equipment_level_increase: number;
          item_exceptional_option: {
            str: string;
            dex: string;
            int: string;
            luk: string;
            max_hp: string;
            max_mp: string;
            attack_power: string;
            magic_power: string;
          };
          item_add_option: {
            str: string;
            dex: string;
            int: string;
            luk: string;
            max_hp: string;
            max_mp: string;
            attack_power: string;
            magic_power: string;
            armor: string;
            speed: string;
            jump: string;
            boss_damage: string;
            damage: string;
            all_stat: string;
            equipment_level_decrease: number;
          };
          growth_exp: number;
          growth_level: number;
          scroll_upgrade: string;
          cuttable_count: string;
          golden_hammer_flag: string;
          scroll_resilience_count: string;
          scroll_upgradeable_count: string;
          soul_name: string;
          soul_option: string;
          item_etc_option: {
            str: string;
            dex: string;
            int: string;
            luk: string;
            max_hp: string;
            max_mp: string;
            attack_power: string;
            magic_power: string;
            armor: string;
            speed: string;
            jump: string;
          };
          starforce: string;
          starforce_scroll_flag: string;
          item_starforce_option: {
            str: string;
            dex: string;
            int: string;
            luk: string;
            max_hp: string;
            max_mp: string;
            attack_power: string;
            magic_power: string;
            armor: string;
            speed: string;
            jump: string;
          };
          special_ring_level: number;
          date_expire: "2023-12-21T17:28+09:00";
        }
      ];
    }
  }
}
