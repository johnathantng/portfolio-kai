import React, { Component } from 'react';
import './Work.css';

//COMPONENTS IMPORTS
import Card from '../Card/Card';

//IMAGE IMPORTS
import RebrandCaption from '../../images/work/captions/idrebrand-caption.png';
import RebrandThumbnail from '../../images/work/thumbnails/idrebrand.png';
import KaiBrandingCaption from '../../images/work/captions/kaibranding-caption.png';
import KaiBrandingThumbnail from '../../images/work/thumbnails/kaibranding.png';
import CrueltyFreeCaption from '../../images/work/captions/crueltyfree-caption.png';
import CrueltyFreeThumbnail from '../../images/work/thumbnails/crueltyfree.png';
import YelortCaption from '../../images/work/captions/yelort-caption.png';
import YelortThumbnail from '../../images/work/thumbnails/yelort.png';
import LuneCaption from '../../images/work/captions/lune-caption.png';
import LuneThumbnail from '../../images/work/thumbnails/lune.png';
import CeramicsCaption from '../../images/work/captions/ceramics-caption.png';
import CeramicsThumbnail from '../../images/work/thumbnails/ceramics.png';
import BoxNine from '../../images/home/decor-blue.png';
import VoodooCaption from '../../images/work/captions/voodoo-caption.png';
import VoodooThumbnail from '../../images/work/thumbnails/voodoo.png';
import PickapathCaption from '../../images/work/captions/pickapath-caption.png';
import PickapathThumbnail from '../../images/work/thumbnails/pickapath.png';
import SlippersCaption from '../../images/work/captions/slippers-caption.png';
import SlippersThumbnail from '../../images/work/thumbnails/slippers.png';

class Work extends Component {
	render() {
		const { onRouteChange } = this.props;
		return(
			<div className='work-container'>
				<div className='work-row'>
					<Card 
						cardStyle={{ background: 'url(' + RebrandThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }} 
						visibility={{ width: '100%'}}
						cardImage={ RebrandCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/79420329/Rebranding-RISD-ID' }
						route={ 'about me' }
						stateRoute={ 'work' }
					/>
					<Card 
						cardStyle={{ background: 'url(' + KaiBrandingThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }}
						visibility={{ width: '100%'}}
						cardImage={ KaiBrandingCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/78983791/personal-branding' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
					<Card 
						cardStyle={{ background: 'url(' + CrueltyFreeThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }}
						visibility={{ width: '100%'}}
						cardImage={ CrueltyFreeCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/78360853/gocrueltyfree' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
					<Card cardStyle={{ background: '#C2C8DE' }}
						visibility={{ visibility: 'hidden' }}
						onRouteChange={ onRouteChange }
						behanceLink={ '' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
				</div>
				<div className='work-row'>
					<Card 
						cardStyle={{ background: 'url(' + CeramicsThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }}
						visibility={{ width: '100%'}}
						cardImage={ CeramicsCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/66352231/Ceramics' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
					<Card 
						cardStyle={{ background: 'url(' + VoodooThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }}
						visibility={{ width: '100%'}}
						cardImage={ VoodooCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/66351687/voobit' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
					<Card 
						cardStyle={{ background: 'url(' + LuneThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }}
						visibility={{ width: '100%'}}
						cardImage={ LuneCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/80739897/LUNE-Period-Tracker-App' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
					<Card 
						cardStyle={{ background: 'url(' + YelortThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }}
						visibility={{ width: '100%'}}
						cardImage={ YelortCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/78361633/Yelort' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
				</div>
				<div className='work-row'>
					<Card 
						cardStyle={{ backgroundImage: 'url(' + BoxNine + ')', backgroundSize: 'cover' }}
						visibility={{ visibility: 'hidden' }}
						onRouteChange={ onRouteChange }
						behanceLink={ '' }
						route={ 'home' }
						stateRoute={ 'work' }
					/> 
					<Card 
						cardStyle={{ background: '#B8ADCF', flex: 1, alignItems: 'center', justifyContent: 'center' }} 
						visibility={{ visibility: 'hidden' }}
						onRouteChange={ onRouteChange }
						behanceLink={ '' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
					<Card 
						cardStyle={{ background: 'url(' + PickapathThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }} 
						visibility={{ width: '100%'}}
						cardImage={ PickapathCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/66352477/Pick-A-Path-Edvice' }
						route={ 'let\'s get connected!' }
						stateRoute={ 'work' }
					/>
					<Card 
						cardStyle={{ background: 'url(' + SlippersThumbnail + ')', backgroundSize: 'cover', cursor: 'pointer' }}
						visibility={{ width: '100%'}}
						cardImage={ SlippersCaption }
						poseAnimationInit={ 'invisible' }
						poseAnimationFinal={ 'visible' }
						onRouteChange={ onRouteChange }
						behanceLink={ 'https://www.behance.net/gallery/66351883/Mouse-Slippers' }
						route={ 'home' }
						stateRoute={ 'work' }
					/>
				</div>
			</div>
		);
	}
}

export default Work;