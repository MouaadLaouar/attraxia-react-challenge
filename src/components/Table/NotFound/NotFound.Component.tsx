import { NotFoundType } from "./NotFound.Type";
import { FC } from "react";
import IMG from "../../../assets/NoTickets.png";
import IMG2 from "../../../assets/NotTickets2.png";
import "./index.css";

const NotFound: FC<NotFoundType> = ({ search }) => {
    return (
        <>
            {search ? (
                <div className="NotFound">
                    <img src={IMG2} />
                    <h1>No tickets found for {search}</h1>
                    <p>Please adjust your search term and try again.</p>
                </div>
            ) : (
                <div className="NotFound">
                    <img src={IMG} />
                    <h1>No Tickets Found!</h1>
                    <p>
                        Your support tickets or feature requests will appear
                        here.
                    </p>
                </div>
            )}
        </>
    );
};

export default NotFound;
