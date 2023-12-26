import { transliterate as tr, slugify } from 'transliteration';
import { useRef, useState } from 'react';
import { createUseStyles } from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Main = () => {
    const inpValue = useRef('');
    const [result, setResult] = useState('');
    const getInpValueToRef = (e) => {
        inpValue.current = e.target.value
    }

    const giveResult = (e) => {
        e.preventDefault();
        setResult(tr(inpValue.current));
    }

    const useStyles = createUseStyles({
        'search-form': {
            borderRadius: '8px',
            overflow: 'hidden',
            margin: 'auto',
            height: '5rem',
            display: 'flex',
            width: 'fit-content',
            border: 'solid 4px'
        },
        'search-form__submit-btn': {
            background: 'aquamarine',
            boxSizing: 'border-box',
            border: 'none',
            'border-left': 'solid 2px',
            '&:hover': {
                cursor: 'pointer',
                background: 'purple'
            }
        },
        'search-form__input': {

            background: 'white',
            boxSizing: 'border-box',
            border: 'none',
            'min-width': '20rem'
        }
    })
    const classes = useStyles()

    return (<main>
        <section>
            <div>
                <h2>Just begin with searching for any word with the help of special software.</h2>
                <form className={classes['search-form']} onSubmit={giveResult}>
                    <input className={classes['search-form__input']} onChange={getInpValueToRef} type="text" />
                    <button className={classes['search-form__submit-btn']} type='submit'>
                        search
                    </button>
                </form>
                <div>
                    {result ? <div> <p>Result : </p> <p>{result}</p></div> : `Type something you want translitate`}
                </div>
            </div>
        </section>

    </main>)
}

export default Main;