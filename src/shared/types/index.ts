export type SortOrder = 'asc' | 'desc';

export enum Brand {
    DELL= 'DELL Technologies',
    HPE= 'HPE (Hewlett Packard Enterprise)',
    IBM='IBM',
    LENOVO='LENOVO',
    SUPERMICRO='Supermicro',
    JUNIPER='Juniper',
    CISCO='Cisco',
    HUAWEI='Huawei',
    BROCADE='Brocade/Ruckus',
    AVAYA='AVAYA',
    TADIRAN='TADIRAN',
    YEALINK='YEALINK'
}

export enum TypeOfDevice {
    SERVER='Серверные платформы',
    LIBS='Ленточные библиотеки',
    CARTRIDGES='Ленточный носители LTO (картриджи)',
    STRIMERS='Ленточные накопители LTO (стримеры)',
    STORAGE='Системы хранения',
    PROCESSOR='Процессоры',
    OZU='Память оперативная',
    HDD='Жесткие диски и SSD',
    MOTHERBOARD='Материнские платы для серверов',
    RAID='Контроллеры RAID',
    IP='IP Телефония',
    KOMMUTATOR='Коммутаторы',
    MAPPERS='Маршрутизаторы',
    COMPONENTS='Комплектующие'
}

export enum Strimers {
    LTO5='Стримеры LTO-5',
    LTO6='Стримеры LTO-6',
    LTO7='Стримеры LTO-7',
    LTO8='Стримеры LTO-8',
    LTO9='Стримеры LTO-9'
}

export enum Cartridges {
    CLEAN='Чистящие картриджи',
    LTO3='LTO-3 (400/800ГБ)',
    LTO4='LTO-4 Ultrium (0,8/1,6TB)',
    LTO5='LTO-5 Ultrium (1,5/3TB)',
    LTO6='TO-6 Ultrium (2,5/6,25TB)',
    LTO7='LTO-7 Ultrium (6/15TB)',
    LTO8='LTO-8 Ultrium (12/30TB)',
    LTO9='TO-9 Ultrium (18/45TB)'
}

