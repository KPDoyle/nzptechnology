import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Ask NZP Expert™ | Net Zero Platforms',description:'Explore your waste-to-value opportunity with specialist NZP guidance and evidence-led preliminary assessments.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
