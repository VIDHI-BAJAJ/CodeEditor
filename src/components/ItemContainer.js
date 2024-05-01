import Item from "./Item"
import { Information,HelpfulLinks,OurFeatures,Resources} from "./Menu";
import Logo from "../Images/logo.png"
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16">
        <div className="flex flex-col">
        <img src={Logo} alt='CodeX' className='h-14 w-28'/>
        <p className="text-sm text-black">"Unite, Code, Collaborate."</p>
        </div>
      <Item Links={Information} title="Information" />
      <Item Links={HelpfulLinks} title="Helpful Links" />
      <Item Links={OurFeatures} title="Our Features" />
      <Item Links={Resources} title="Resources for Developers" />
    </div>
  );
};

export default ItemsContainer;