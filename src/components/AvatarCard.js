import { fallbackImage, skeleton } from "../helpers/utils";
import LazyImage from "./LazyImage";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

const AvatarCard = (props) => {
    const [loading] = useContext(LoadingContext);

    return (
        <iframe id="oleen-contact-form" src="https://5337-2a01-cb04-12f-b400-1423-b60-2a54-8cf4.ngrok-free.app/public/mortgage/opportunities/new?external_id=b84bd06c-1f6c-4512-b2f5-a4f596703c01" width="100%" height="1620" ></iframe>
    )
}

AvatarCard.propTypes = {
    profile: PropTypes.object
}

export default AvatarCard;