import { useState, useRef } from 'react'
import { createUseStyles } from 'react-jss'
import { transliterate as tr, slugify } from 'transliteration';

const Header = () => {
    const relNavLinksArr = useRef([{ id: 1, linkName: 'Home', Headline: 'Here is our company' }]);
    console.log(relNavLinksArr.current);
    const [navLinks, setNavLinks] = useState(relNavLinksArr.current);
    const [Headline, setHeadline] = useState(relNavLinksArr.current[0].Headline);
    const backgroundSrcRef = useRef('.../images/corpusheader.jpg');

    const [backgroundSrcState, setbackgroundSrcState] = useState(backgroundSrcRef.current);

    const useStyles = createUseStyles({

        '@global': {
            header: {
                background: `url(${backgroundSrcRef.current})`

            }

        },
        'navbar__menu': {
            display: 'flex',
            listStyle: 'none',
            width: 'fit-content',
            gap: '1rem',
            '& a': {
                textDecoration: 'none',
                color: 'black'
            }
        }
    })
    const classes = useStyles()

    return (
        <header>
            <div>
                <nav>
                    <a href="#">
                        <img src='' alt="" />
                    </a>
                    <ul className={classes['navbar__menu']}>
                        {navLinks.map((item) =>
                            <li key={item.id}>
                                <a href="">
                                    {item.linkName}
                                </a>
                            </li>
                        )}
                    </ul>

                </nav>
                <h1>
                    {Headline}
                </h1>
            </div>
        </header>

    )
}

export default Header;