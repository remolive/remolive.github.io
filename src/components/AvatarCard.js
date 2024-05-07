import { fallbackImage, skeleton } from "../helpers/utils";
import LazyImage from "./LazyImage";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

const AvatarCard = (props) => {
    const [loading] = useContext(LoadingContext);

    return (
        <>
            <iframe id="oleen-contact-form" src="https://oleen-api-staging-92cc8cf6663e.herokuapp.com/public/mortgage/opportunities/new?external_id=d691467c-1fdc-4491-87f3-069441f3e383" width="100%" height="1620" ></iframe>
        </>
    )
}

AvatarCard.propTypes = {
    profile: PropTypes.object
}

export default AvatarCard;