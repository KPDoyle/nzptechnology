import React from 'react';
import MoveUpRight from 'lucide-react/dist/esm/icons/move-up-right.js';

const examples=[
  {
    id:'elkem-salten',title:'Elkem Salten',location:'Sørfold, Norway',step:'Submerged-arc furnace engineering & heat integration',
    intro:'An industrial silicon-smelting study measured material and energy flows around a 45 MW submerged-arc furnace, connecting furnace operation with the potential for useful heat recovery.',
    facts:[['Application','Silicon-alloy production'],['Study','Measurement campaign in 2009; paper published in 2010'],['Furnace system','Submerged arc with Søderberg electrodes']],
    detail:'The study describes three furnaces at Salten and examines the energy carried in products, cooling water and offgas. It distinguishes existing uses of cooling-water heat from a proposed additional offgas energy-recovery configuration.',
    relevance:'A practical reference for the furnace equipment, cooling systems and mass-and-energy accounting that also inform NZP’s development. Silicon smelting uses different feedstocks and chemistry from waste conversion.',
    source:'Kamfjord et al., Energy Balance of a 45 MW (Ferro-) Silicon Submerged Arc Furnace, INFACON XII, 2010, pp. 729–738.',
    url:'https://www.pyrometallurgy.co.za/InfaconXII/729-Kamfjord.pdf'
  },
  {
    id:'cc-metals',title:'CC Metals & Alloys',location:'Calvert City, Kentucky, United States',step:'Submerged-arc processing, tapping & particulate capture',
    intro:'Kentucky’s 2024 permit records describe three submerged-arc furnaces producing ferrosilicon and specialty ferroalloys, supported by tapping, casting and product-handling equipment.',
    facts:[['Application','Ferrosilicon and specialty ferroalloys'],['Source record','Kentucky permit V-23-022, August 2024'],['Process systems','Furnaces, tapping, casting, hoods and baghouses']],
    detail:'The source describes open-type furnaces with panels directing emissions towards hoods and baghouses. Charge preparation, molten-product handling and silica-fume storage form part of the wider industrial operation.',
    relevance:'Illustrates established furnace and materials-handling operations. Its open furnace and alloy-production duty differ from NZP’s proposed sealed waste-to-gas process.',
    source:'Kentucky Division for Air Quality, CC Metals and Alloys, Executive Summary, 2 August 2024; Statement of Basis / Summary for permit V-23-022, 25 March 2024.'
  },
  {
    id:'felman-production',title:'Felman Production',location:'New Haven, West Virginia, United States',step:'Industrial-scale submerged-arc furnace systems',
    intro:'Historical permit and EPA records document a ferroalloy operation built around three submerged-arc furnaces and associated gas-capture equipment.',
    facts:[['Historical furnace ratings','32 MW, 20 MW and 20 MW'],['Equipment arrangement','Open submerged-arc furnaces with baghouses'],['Record basis','2012 application and 2014 EPA memorandum']],
    detail:'The archived renewal application lists furnaces 2, 5 and 7, alongside casting, crushing, screening and material-handling equipment. EPA’s 2014 memorandum independently identifies the same furnace ratings and their particulate-control systems.',
    relevance:'Provides an industrial precedent for furnace power systems, molten-material handling and supporting plant infrastructure. It demonstrates ferroalloy processing rather than waste-to-syngas performance.',
    source:'Felman Production, Title V Renewal Application, February 2012, equipment table and furnace forms; EPA, Mercury Control Options and Impacts for the Ferroalloys Production Industry, 29 August 2014, section 3.',
    url:'https://downloads.regulations.gov/EPA-HQ-OAR-2010-0895-0175/content.pdf'
  },
  {
    id:'albany-arc-melter',title:'Albany arc-melter programmes',location:'Oregon, United States',step:'Graphite-electrode treatment & vitrification',
    intro:'US Bureau of Mines and Department of Energy programmes investigated arc melting of incinerator residues and materials simulating difficult mixed wastes.',
    facts:[['Programme','Bureau of Mines / DOE research'],['Technology','Three-phase graphite-electrode arc melting'],['Phase 2 operation','84 hours, including preheat and cleanout'],['Feed mixtures processed','Approximately 28,000 lb of waste/soil surrogates']],
    detail:'The primary Phase 2 report documents trials on 11–14 April 1995, with continuous feeding, semi-continuous slag tapping and a separately tapped metal-alloy phase. The feed mixtures were non-radioactive mixed-waste surrogates with substantial added soil. The report records glass/ceramic product characterisation and leach testing. Offgas was treated through a thermal-oxidation and filtration train.',
    relevance:'A research precedent for the thermal-treatment and mineral-vitrification steps relevant to NZP’s engineering foundations. The work concerns specific test materials and treatment duties.',
    source:'Soelberg et al., Graphite Electrode Arc Melter Demonstration Phase 2 Test Results, INEL-95/0502, June 1996, executive summary; Hartman et al., facility design report, Bureau of Mines, 1995.',
    url:'https://stacks.cdc.gov/view/cdc/237729'
  },
  {
    id:'jindal-angul',title:'Jindal Steel, Angul',location:'Odisha, India',step:'Syngas conditioning & industrial use of CO and hydrogen',
    intro:'Jindal’s Angul steelworks uses a coal-gasification route to supply synthesis gas for direct-reduced iron production.',
    facts:[['Application','Syngas-based direct-reduced iron'],['Gas source','Coal gasification'],['Relevant molecules','Carbon monoxide and hydrogen']],
    detail:'The archived operator case study describes gasification, gas cleaning and by-product handling. It explains the use of carbon monoxide and hydrogen as reducing gases in iron production. Jindal’s published Angul site description also identifies the syngas-based DRI route.',
    relevance:'Demonstrates an established industrial use for CO- and hydrogen-containing gas. Angul’s coal-based production route differs from NZP’s residual-waste conversion approach; it is an example of downstream gas use.',
    source:'Jindal, Coal Gas for DRI Plant, archived operator case study; Jindal Steel, Odisha / Angul facility description.',
    url:'https://www.jindalsteel.in/odisha'
  },
  {
    id:'wuhan-recovered-gas',title:'Wuhan Iron & Steel',location:'Wuhan, China',step:'Recovered process gas to power & useful steam',
    intro:'GE Vernova’s Wuhan case study describes a combined-cycle plant using blast-furnace gas to produce electricity and steam for industrial use.',
    facts:[['Input','Recovered blast-furnace gas'],['Conversion route','Gas turbine, heat recovery and steam cycle'],['Useful outputs','Electricity and process steam']],
    detail:'The published case study connects the steelworks’ gas stream with a power-generation system and useful steam for steel production, illustrating how an existing industrial gas can become an energy resource.',
    relevance:'A reference for downstream energy integration and local use of recovered gas. Blast-furnace gas has a different composition and origin from NZP’s intended waste-derived synthesis gas.',
    source:'GE Vernova, Wuhan Iron & Steel case study; archived copy captured April 2025.',
    url:'https://www.gevernova.com/gas-power/resources/case-studies/wuhan'
  }
];

export default function IndustrialPrecedents({SectionHead,Eyebrow}){return <section className="value-section" id="industrial-precedents"><div className="container">
  <SectionHead label="Independent industrial examples" title={<>Established building blocks.<br/>Industrial applications.</>} description="Submerged-arc processing, mineral treatment and the industrial use of process gases have a wider engineering record. These third-party examples illustrate individual process steps relevant to NZP’s platform development; they are independent installations and research programmes, rather than projects delivered by NZP or applications of NZP’s proprietary technology."/>
  <div className="archive-library">{examples.map(example=><article className="archive-project" id={example.id} key={example.id}><div className="archive-project-heading"><Eyebrow>Independent industrial example</Eyebrow><h3>{example.title}</h3><p className="archive-location">{example.location}</p><p>{example.intro}</p></div><div className="archive-process-step"><span>Relevant process step</span><h4>{example.step}</h4></div><dl className="archive-facts">{example.facts.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><details className="archive-detail"><summary>Explore the industrial example<span aria-hidden="true">+</span></summary><div><section><h4>The industrial application</h4><p>{example.detail}</p></section><section><h4>Relevance to NZP</h4><p>{example.relevance}</p></section><p className="archive-source">Source: {example.source}</p>{example.url&&<a className="text-link" href={example.url} target="_blank" rel="noreferrer">Read the published source<MoveUpRight size={15}/></a>}</div></details></article>)}</div>
</div></section>}
