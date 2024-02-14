import classes from '../index.module.scss'
import {FormControlLabel, Grid, Radio} from "@mui/material";
import DonationSVG from '../donationSvg'
import {useState} from "react";
import WalletSVG from "../walletSvg";

export function Donation() {
    const [isDonating, setIsDonating] = useState<boolean | undefined>()
    return (
        <div className={classes.options}>
            <h2>Would you like to donate $15 to charity or add it to your wallet for your next purchase?</h2>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <div className={classes.radio} onClick={() => setIsDonating(true)}>
                        <div className={classes.wallet}>
                            <DonationSVG isActive={isDonating}/>
                        </div>
                        <div className={classes.label}>Donate to Charity</div>
                        <FormControlLabel
                            classes={{root: classes.formControl}}
                            value={isDonating === true}
                            label={''}
                            control={
                                <Radio
                                    name='nikan'
                                    onChange={() => setIsDonating(true)}
                                    checked={isDonating === true}
                                    color='primary'
                                />
                            }
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.radio} onClick={() => setIsDonating(false)}>
                        <div className={classes.wallet}>
                            <WalletSVG isActive={isDonating === false}/>
                        </div>
                        <div className={classes.label}>Add to My Wallet</div>
                        <FormControlLabel
                            classes={{root: classes.formControl}}
                            value={isDonating === false}
                            label={''}
                            control={
                                <Radio
                                    name='wallet'
                                    onChange={() => setIsDonating(false)}
                                    checked={isDonating === false}
                                    color='primary'
                                />
                            }
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}