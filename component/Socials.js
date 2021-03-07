import LinkIcon from 'component/Icon/LinkIcon';
import { footer } from 'data';

const Socials = () => {
  const { icons } = footer;

  return (
    <div className="social">
      {icons.map((icon, index) => (
        <LinkIcon key={index} {...icon} />
      ))}
    </div>
  );
};

export default Socials;
