### Simple and fancy notifications for Meteor

inspiration: [Codrops Article - Notification Styles Inspiration](http://tympanus.net/codrops/2014/07/23/notification-styles-inspiration/)

### Demo

[http://s-alert-demo.meteor.com/](http://s-alert-demo.meteor.com/)

### Usage

Add package:

    meteor add juliancwirko:s-alert

Then place ````{{> sAlert}}```` in your main template. Recomended usage:

    <body>
        {{> sAlert}}
    </body>

#### sAlert configuration

You can set up your sAlert (client side). (More about possible configuration options below.) You can ommit it and you will have standard config which is the same as the one below:

    Meteor.startup(function () {

        sAlert.config({
            effect: 'scale',
            position: 'right-top',
            timeout: 5000
        });

    });

sAlert is based on only client side collection. It is called ````sAlert.collection````

#### Fire up your alerts by using methods:

##### Error:

    sAlert.error('Your message', configOverwrite);

##### Warning:

    sAlert.warning('Your message', configOverwrite);

##### Info:

    sAlert.info('Your message', configOverwrite);

##### Success:

    sAlert.success('Your message', configOverwrite);

##### Close alert:

    sAlert.close(allertId);
- id is from Meteor collection called ````sAlerts.collection```` (client only)

##### Immediately close all alerts:

    sAlert.closeAll();


And what is ````configOverwrite````?
This is an object with all settings which you want to overwrite. So if you have your sAlert config (mentioned above) you can overwrite global config with each of your sAlert calls.

**For example:**

    sAlert.error('Boom! Something went wrong!', {effect: 'genie', position: 'right-bottom', timeout: 'no'});

This one particular error will be displayed in different way.

#### Avaible effects:

- scale
- slide
- genie
- jelly
- flip
- bouncyflip
- stackslide (right-top and left-top positions are the same here similar right-botton and left-bottom)

#### Avaible positions:

- left-top
- left-bottom
- right-top
- right-bottom

#### Timeout:

You can set up it in miliseconds or place 'no'.

### CSS styling

You can overwrite all css classes. Major classes which are defined by conditions are:

````.s-alert-blue, .s-alert-green, .s-alert-yellow, .s-alert-red````

For example if you want to overwrite .s-alert-red in scale effect

    .s-alert-effect-scale.s-alert-red {
        background: #bada55; //your background color here
        color: #fff //your text color here
    }


#### TODO

- <s>gneral config and logic for sAlerts (this is important part)</s>
- clean css files
- <s>flatten effects combinations</s>
- multiple alerts with collection
- (if time permits..) more fancy styles
- (if time permits..) for now SVG examples and all effects from 'other' type (from codrops example) are removed