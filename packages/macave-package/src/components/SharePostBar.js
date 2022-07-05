import React, { useRef, useEffect } from 'react';
import { connect, styled, css, decode } from 'frontity';
import { FacebookShareButton, EmailShareButton, TwitterShareButton, FacebookMessengerShareButton, WhatsappShareButton } from 'react-share';
import Link from '@frontity/components/link'
import FbIcon from './svgIcons/fbIcon';
import TwitterIcon from './svgIcons/twitterIcon';
import EmailIcon from './svgIcons/emailIcon';
import MessengerIcon from './svgIcons/messengerIcon';
import WhatsAppIcon from './svgIcons/whatsAppIcon';

const SharePostBar = ({state, props}) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const urlToShare = post['guid']['rendered'];
    const ref = useRef();
    useEffect(() => {
        if ( props ) {
            if ( ref.current ) {
                calculateShareBannerPosition();
                window.addEventListener("resize", calculateShareBannerPosition);
                return () => window.removeEventListener("resize", calculateShareBannerPosition);
            }
        }
    })
    const calculateShareBannerPosition = (e) => {
        if ( window.innerWidth >= 1024 ) {
            let postContainer = document.querySelector('[data-id="post-container"]');
            ref.current.style.left = `${postContainer.offsetLeft - 70}px`;
            return
        }
        ref.current.removeAttribute('style');
    }
    return (
        <ShareBar ref={ref}>
            <ul>
                <li>
                    <WhatsappShareButton title={decode(post.title.rendered)} url={urlToShare}>
                        <i>
                            <WhatsAppIcon></WhatsAppIcon>
                        </i>
                    </WhatsappShareButton>
                </li>
                <li>
                    <FacebookShareButton
                        url={urlToShare}     //eg. https://www.example.com
                        quotes={decode(post.title.rendered)}  //"Your Quotes"
                        hashtag='' // #hashTag
                    >
                        <i>
                            <FbIcon></FbIcon>
                        </i>
                    </FacebookShareButton>
                </li>
                <li>
                    <EmailShareButton subject={decode(post.title.rendered)} body={decode(post.title.rendered)}  url={urlToShare}>
                        <i>
                            <EmailIcon></EmailIcon>
                        </i>
                    </EmailShareButton>
                </li>
                <li>
                    <TwitterShareButton title={decode(post.title.rendered)}  url={urlToShare}>
                        <i>
                            <TwitterIcon></TwitterIcon>
                        </i>
                    </TwitterShareButton>
                </li>
                <li>
                    <FacebookMessengerShareButton appId="1756014794581686" 
                    url={urlToShare}
                    redirectUri={urlToShare}
                    >
                        <i>
                            <MessengerIcon></MessengerIcon>
                        </i>
                    </FacebookMessengerShareButton>
                </li>
            </ul>
        </ShareBar>
    )
}

export default connect(SharePostBar)

const ShareBar = styled.div`
    ul{
        padding: 8px 10px;
        list-style: none;
        border-radius: 0 8px 8px 0px;
        background: white;
        li{
            button{
                width: 22px;
                height: 22px;
            }
            margin-bottom: 16px;
        }
    }
    @media (min-width: 981px) {
        position: fixed;
        left: 0;
        z-index: 9999;
        margin-top: 70px;
    }
    @media (max-width: 980px) {
        margin: 14px 0 25px;
        background: white;
        z-index: 99;
        width: 100%;
        ul{
            display: grid;
            grid-template-columns: repeat(5, calc( calc(100% - 60px) / 5));
            grid-gap: 15px;
            width: fit-content;
            margin: 0 auto;
            li{
                margin-bottom: 0;
            }
        }
    }
`