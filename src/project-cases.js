export const projectCases = [
  {
    id:'lancaster', title:'Lancaster metals recovery', location:'Ohio, United States', period:'Late 1990s–mid-2000s', category:'Installations', application:'Metals recovery',
    intro:'A sealed submerged-arc installation integrated furnace operation, separate metal and slag tapping, gas treatment and automated controls for a metals-recycling customer.',
    image:{file:'ohio-reactor',alt:'Historical Lancaster furnace and access platforms',caption:'Lancaster reactor — original project archive photograph.'},
    facts:[['Furnace','1 MW submerged-arc system'],['Materials','Metal-bearing residuals'],['Recovered product','Metals for sale'],['Gas pathway','Thermal oxidation']],
    sections:[['The engineering','Equipment was fabricated in modules in Idaho and transferred to the customer’s site. The process combined sealed feeding, metal and slag tapping, HEPA filtration, cooling-water treatment and automatic process control.'],['Project history','The team’s case history records metals recovery and sale, followed by mothballing in the mid-2000s. The equipment was inspected in 2011 and subsequently dismantled in the early 2020s.'],['Industrial relevance','Experience spans the complete treatment train: receiving a difficult material, separating valuable metals, managing the mineral fraction and integrating the supporting plant systems.']],
    sources:'CASE Studies, project 7; Metals Recovery project summary; Ohio equipment photographs.'
  },
  {
    id:'huntsville',title:'Huntsville Plasmatron programme',location:'Alabama, United States',period:'1998–mid-2000s',category:'Test programmes',application:'Waste destruction & feedstock trials',
    intro:'An AC plasma-torch installation treated contraband and supported trials with tyres, biomass, medical wastes and ores.',
    image:{file:'huntsville-gasifier',alt:'Plasmatron main gasifier from the Huntsville archive',caption:'Huntsville Plasmatron gasifier — original project archive photograph.'},
    facts:[['Equipment','Up to 1 MW AC plasma torch'],['Electrodes','Copper-electrode torch'],['Original duty','Contraband destruction'],['Test materials','Tyres, biomass, medical wastes and ores']],
    sections:[['The engineering','The installation brought together waste feeding, gas treatment, water systems and process control. This copper-electrode torch architecture differs from the graphite-arc approach being developed by NZP.'],['Project history','Historical records describe operation from 1998 into the mid-2000s, including metals-concentration work in 1998. Syngas was combusted for the destruction application. The unit was later sold.'],['Industrial relevance','The programme contributed practical experience of preparing and handling varied feedstocks, adapting process conditions and connecting the reactor with gas and water treatment.']],
    sources:'CASE Studies, project 8; SUI #1 project summary; Plasmatron equipment photographs.'
  },
  {
    id:'taipei',title:'Taipei chemical-feedstock recovery',location:'Taipei, Taiwan',period:'Historical installation',category:'Installations',application:'Waste chemicals to syngas',
    intro:'A chemical-processing installation converted waste industrial chemicals into syngas for use as a feedstock in manufacturing other chemicals.',
    image:{file:'taipei-torch',alt:'Plasma torch equipment illustrated in the Taipei chemical project case history',caption:'Torch equipment illustrated in the Taipei case history; this photograph shows equipment, rather than the complete Taiwan plant.'},
    facts:[['Equipment','Up to 1 MW AC plasma system'],['Design basis','Up to 1 short ton/h, feedstock dependent'],['Input','Waste industrial chemicals'],['Product use','Syngas for chemical manufacture']],
    sections:[['The engineering','The system was fabricated in the United States, dismantled for shipment and reassembled at the customer’s chemical plant. It combined a copper-electrode plasma torch with feeding, gas treatment, cooling-water systems and process control.'],['Project history','Both the dedicated project summary and the later team case history describe an installed chemical-gasification system and syngas reuse. The historical record also describes subsequent typhoon damage to the chemical plant.'],['Industrial relevance','This case connects waste treatment with a local chemical customer: the value pathway was the use of recovered gas as a manufacturing feedstock.']],
    sources:'SUI #2 chemical gasification project summary; CASE Studies, project 9 and accompanying equipment photograph.'
  },
  {
    id:'shanghai',title:'Shanghai medical-waste treatment',location:'Shanghai, China',period:'Acceptance testing, 2000–2001',category:'Installations',application:'Medical waste & metal recovery',
    intro:'A historical PEAT programme applied graphite-electrode treatment to hospital and laboratory wastes, with recovery of a metal fraction.',
    image:{file:'shanghai-plant',alt:'Shanghai medical-waste treatment equipment shown in the project case history',caption:'Shanghai medical-waste installation — photograph reproduced from the team’s project case history.'},
    facts:[['Feedstock','Hospital and laboratory wastes'],['Process','Graphite-electrode thermal treatment'],['Recovered material','Stainless-steel scrap'],['Programme','Acceptance tests in 2000–2001']],
    sections:[['The engineering','The treatment train combined a sealed furnace, metal recovery and offgas treatment. The project sat within PEAT’s Plasma Thermal Destruction & Recovery programme, with contributions from MeltTran engineering.'],['Project history','The PEAT summary records acceptance testing during 2000–2001. The team’s case history describes medical-waste destruction and recovery of high-grade stainless steel for sale as scrap.'],['Industrial relevance','Medical waste brings together organic, metallic and mineral components. This case illustrates treatment of the organic fraction alongside recovery of a useful metal stream.']],
    sources:'PEAT project summary; CASE Studies, project 3, PEAT overview and accompanying plant photograph.'
  },
  {
    id:'california',title:'California foundry-waste vitrification',location:'California, United States',period:'Historical project',category:'Installations',application:'Foundry residuals',
    intro:'A sealed submerged-arc furnace was used to vitrify foundry waste containing metal-contaminated dust.',
    facts:[['Furnace','1 MW submerged-arc system'],['Feedstock','Foundry wastes and contaminated dust'],['Treatment','Vitrification'],['Project contributors','MeltTran and PEAT']],
    sections:[['The engineering','The process melted the mineral fraction and incorporated dust into a vitrified slag. The equipment train included provision for metals recovery and a syngas oxidiser.'],['Project history','The team’s historical case record describes the application as a means of encapsulating foundry dust for safer handling and disposal.'],['Industrial relevance','The case adds mineral-treatment experience to the engineering record, showing how furnace configuration and material chemistry shape the handling of industrial residues.']],
    sources:'CASE Studies, project 2; PEAT project summary.'
  },
  {
    id:'hanjung',title:'Hanjung waste-treatment pilot',location:'South Korea',period:'Historical demonstration programme',category:'Test programmes',application:'Graphite-arc treatment & vitrification',
    intro:'The HVP200 pilot at the Korea Atomic Energy Research Institute brought together graphite-arc treatment, automated electrode control, gas treatment and emissions monitoring, with contributions from MeltTran and COH2.',
    image:{file:'korea-testing',alt:'MTI-500 shakedown and testing in the Hanjung project archive, 1998',caption:'MTI-500 shakedown and testing, 1998 — original Hanjung project archive caption. Photographic equipment labels are distinct from HVP200 brochure specifications.'},
    gallery:[{file:'mti-construction',alt:'MTI-500 furnace during construction in 1997',caption:'MTI-500 construction, 1997 — original equipment archive photograph.'},{file:'korea-arrival',alt:'MTI-500 equipment offloaded in South Korea in February 1998',caption:'MTI-500 equipment offloaded in South Korea, February 1998 — Hanjung project archive.'}],
    facts:[['Pilot design capacity','200 kg/h, HVP200 brochure basis'],['Electrodes','Two graphite electrodes'],['Historical duty','Waste vitrification and destruction'],['Test programme','Six non-radioactive and two radioactive-surrogate tests']],
    sections:[['The engineering','The brochure describes a melt temperature of at least 1,200°C, separate metal and glass/ceramic products, and wet and dry gas treatment with final filtration. Automatic electrode control, monitoring and standby diesel power formed part of the facility design.'],['The test programme','Startup and surrogate testing covered the treatment train. Product assessment included glass leach testing under the Product Consistency Test and compressive-strength testing under ASTM C39.'],['Products and gas pathway','The historical duty was vitrification and destruction. Offgas was oxidised rather than recovered for sale as syngas. The 200 kg/h figure is the historical pilot design capacity.'],['Industrial relevance','The project contributes graphite-arc process-control and plant-integration experience to the engineering heritage informing NZP’s development of technology for useful industrial gas recovery.']],
    sources:'Hanjung HVP200 brochure, pp. 3–11; Hanjung project archive photographs, identified by their original MTI-500 equipment captions.'
  },
  {
    id:'livermore',title:'Lawrence Livermore waste trials',location:'California, United States',period:'1999–2000',category:'Test programmes',application:'Hazardous & medical waste',
    intro:'A smaller plasma system was constructed and tested for a US Department of Energy laboratory programme involving hazardous and medical waste.',
    facts:[['Programme','Lawrence Livermore National Laboratory'],['Equipment scale','Up to 150 kg/h'],['Feedstocks','Hazardous and medical wastes'],['Period','Construction and testing, 1999–2000']],
    sections:[['The engineering','The SUI project summary describes a smaller system within the same historical plasma-technology programme as the Huntsville work. It was a separate piece of equipment from the 1 MW Huntsville installation.'],['Project history','The record describes a short test programme in 1999–2000 and the equipment being returned to Lawrence Livermore after testing.'],['Industrial relevance','Smaller-scale trials offer a route to studying demanding feedstocks and treatment requirements before committing to a larger site configuration.']],
    sources:'SUI #1 plasma gasification project summary, Lawrence Livermore test-system account.'
  },
  {
    id:'birmingham-asr',title:'Birmingham industrial energy integration',location:'Alabama, United States',period:'Development, 2000–2002',category:'Development studies',application:'Automotive shredder residue',
    intro:'A development project explored repurposing an existing industrial furnace to turn automotive shredder residue and tyres into syngas for on-site power.',
    facts:[['Existing asset','5 MW arc furnace proposed for conversion'],['Design feed rate','5 short tons/h'],['Feedstocks','Automotive shredder residue and tyres'],['Intended output','Syngas for combined-cycle power']],
    sections:[['The proposed configuration','The concept combined a sealed gasification furnace with a combustion turbine, heat recovery and a steam turbine. It sought to bring waste processing and the industrial customer’s energy demand together.'],['Development work','The historical records describe site and equipment arrangements, customer technical review and work on interconnection and power-purchase agreements.'],['Project outcome','Development ended as the power-sale economics became unattractive. It remained a development project rather than an operating integrated power plant.'],['Industrial relevance','The commercial case depends on the route from conversion to customer: site layout, grid interfaces and the value of local energy can be as decisive as the reactor design.']],
    sources:'ASR to Energy Project summary; CASE Studies, project 4.'
  },
  {
    id:'jasper',title:'Jasper municipal resource project',location:'Alabama, United States',period:'Development, 2002–2004',category:'Development studies',application:'Municipal & agricultural residuals',
    intro:'A municipal energy concept brought together local waste supply, agricultural processing residuals and a proposed syngas-to-power plant.',
    facts:[['Local resource','Municipal solid waste'],['Additional streams','Tyres and poultry-processing residuals considered'],['Process concept','Gasification and combined-cycle generation'],['Development period','2002–early 2004']],
    sections:[['The proposed configuration','Gasification was intended to supply a combustion turbine, with heat recovery and steam generation integrated into the power cycle. Several feedstock and equipment configurations were considered during development.'],['Development work','The project summary records municipal and agricultural feedstock agreements, water and sewage arrangements, technology review, substation design and interconnection work.'],['Project outcome','Development ended in 2004 because the available power-sale price did not support the proposed economics.'],['Industrial relevance','The work shows the breadth of local project integration: resources, utilities, land, product demand and commercial terms need to form a coherent business case.']],
    sources:'Jasper Energy Project summary; CASE Studies, project 5.'
  },
  {
    id:'uab',title:'UAB hospital resource-recovery concept',location:'Birmingham, Alabama, United States',period:'Development, around 2005',category:'Development studies',application:'Hospital waste & useful heat',
    intro:'A hospital-focused concept considered local treatment of medical waste, recovery of surgical steel and use of syngas in an existing central heat plant.',
    facts:[['Customer setting','University of Alabama at Birmingham hospital'],['Proposed feed rate','0.5 short tons/h'],['Materials','Medical and laboratory wastes'],['Intended outputs','Recovered steel and central-plant fuel']],
    sections:[['The proposed configuration','The team investigated fitting the treatment system within an existing hospital and university heat-plant setting. Waste from surrounding hospitals was considered for a central receiving location.'],['Development work','The source records a memorandum of understanding and discussions with hospital engineering and administration. The configuration linked waste handling with the hospital’s established heat demand.'],['Project outcome','The proposed grant funding was not secured and the project did not proceed to an operating installation.'],['Industrial relevance','Co-location can connect a difficult local waste stream with an existing energy customer, while fitting the practical constraints of a working institution.']],
    sources:'UAB Medical Wastes Vitrification Project summary; CASE Studies, project 10.'
  },
  {
    id:'misty-mountain',title:'Misty Mountain resource recovery',location:'Sevier County, Tennessee, United States',period:'Development, 2005–around 2010',category:'Development studies',application:'Municipal residuals to liquid fuels',
    intro:'A development programme explored gasifying municipal waste and tyres beside an existing waste-management site, with syngas conversion to liquid fuels.',
    image:{file:'misty-mountain-site',alt:'Land shown for the proposed Misty Mountain project in the team case history',caption:'Site photograph in the Misty Mountain case history. The proposed conversion plant was not built.'},
    facts:[['Proposed furnace','10 MW gasification system'],['Design feed rate','Approximately 12 short tons/h'],['Feedstocks','Municipal solid waste and tyres'],['Development work','FEL-1 and FEL-2 engineering']],
    sections:[['The proposed configuration','The initial scope considered ethanol and higher mixed alcohols, then shifted to Fischer–Tropsch diesel. The concept coupled feedstock preparation and gasification with downstream gas-to-liquids processing.'],['Development work','Historical records describe seed-funded front-end engineering, a site arrangement alongside the waste authority’s landfill and feedstock-supply work.'],['Project outcome','The development programme ended around 2010 when further development funding was not secured. The figures above are historical design assumptions.'],['A separate modelling study','The October 2015 INL ASPEN report used a later 500 tonnes/day modelling basis. That study is presented separately below and should be read as a process model, rather than operating results for the earlier proposal.']],
    link:{href:'#historical-model',label:'Explore the 2015 process model'},
    sources:'MMRR Project summary; CASE Studies, project 11; ASPEN Process Model, INL/LTD-15-36850.'
  },
  {
    id:'chester',title:'Chester waste-to-fuels development',location:'South Carolina, United States',period:'Development, 2009–2015',category:'Development studies',application:'Municipal residuals & forestry biomass',
    intro:'A larger-scale development concept connected locally generated residual waste and forestry materials with synthesis gas and Fischer–Tropsch transport fuels.',
    facts:[['Configuration','Multiple proposed 25 MW gasification trains'],['Feedstocks','Organic MSW fractions and forestry thinnings'],['Intended products','Fischer–Tropsch diesel and jet fuel'],['Energy integration','Heat recovery and steam generation']],
    sections:[['The proposed configuration','The concept combined parallel gasification trains, syngas processing and downstream fuel synthesis. Heat recovery was included to supply steam and support internal energy requirements.'],['Development work','The retrospective project record describes work on site access, rail logistics, product offtake and engineering delivery arrangements. These were historical development activities.'],['Project outcome','The project remained a development proposal; the historical team partnership subsequently ended. It is included as engineering and project-development experience.'],['Industrial relevance','The case broadens the record from reactor design to product routes, logistics and the interfaces needed to bring an industrial fuel project together.']],
    sources:'CASE Studies, project 13.'
  }
];
export const projectCategories=['All projects','Installations','Test programmes','Development studies'];
