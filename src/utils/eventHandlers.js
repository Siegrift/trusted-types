/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */

// TODO check attributes in safari, remove legacy safe handlers
const unsafeAttributeEventHandlers = [
  'onabort',
  'onactivate',
  'onactivateinvisible',
  'onafterprint',
  'onafterupdate',
  'onanimationcancel',
  'onanimationend',
  'onanimationiteration',
  'onanimationstart',
  'onariarequest',
  'onauxclick',
  'onbeforeactivate',
  'onbeforecopy',
  'onbeforecut',
  'onbeforedeactivate',
  'onbeforeeditfocus',
  'onbeforepaste',
  'onbeforeprint',
  'onbeforeunload',
  'onbegin',
  'onblur',
  'onbounce',
  'oncancel',
  'oncanplay',
  'oncanplaythrough',
  'oncellchange',
  'onchange',
  'onclick',
  'onclose',
  'oncommand',
  'oncontextmenu',
  'oncontrolselect',
  'oncopy',
  'oncuechange',
  'oncut',
  'ondataavailable',
  'ondatasetchanged',
  'ondatasetcomplete',
  'ondblclick',
  'ondeactivate',
  'ondrag',
  'ondragdrop',
  'ondragend',
  'ondragenter',
  'ondragexit',
  'ondragleave',
  'ondragover',
  'ondragstart',
  'ondrop',
  'ondurationchange',
  'onemptied',
  'onend',
  'onended',
  'onerror',
  'onerrorupdate',
  'onexit',
  'onfilterchange',
  'onfinish',
  'onfocus',
  'onfocusin',
  'onfocusout',
  'onformdata',
  'onfullscreenchange',
  'onfullscreenerror',
  'ongotpointercapture',
  'onhelp',
  'oninput',
  'oninvalid',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onlayoutcomplete',
  'onload',
  'onloadeddata',
  'onloadedmetadata',
  'onloadend',
  'onloadstart',
  'onlosecapture',
  'onlostpointercapture',
  'onmediacomplete',
  'onmediaerror',
  'onmessage',
  'onmousedown',
  'onmouseenter',
  'onmouseleave',
  'onmousemove',
  'onmouseout',
  'onmouseover',
  'onmouseup',
  'onmousewheel',
  'onmove',
  'onmoveend',
  'onmovestart',
  'onmozfullscreenchange',
  'onmozfullscreenerror',
  'onmscontentzoom',
  'onmsgesturechange',
  'onmsgesturedoubletap',
  'onmsgestureend',
  'onmsgesturehold',
  'onmsgesturestart',
  'onmsgesturetap',
  'onmsgotpointercapture',
  'onmsinertiastart',
  'onmslostpointercapture',
  'onmsmanipulationstatechanged',
  'onmspointercancel',
  'onmspointerdown',
  'onmspointerenter',
  'onmspointerleave',
  'onmspointermove',
  'onmspointerout',
  'onmspointerover',
  'onmspointerup',
  'onoffline',
  'ononline',
  'onoutofsync',
  'onoverscroll',
  'onpaste',
  'onpause',
  'onplay',
  'onplaying',
  'onpointercancel',
  'onpointerdown',
  'onpointerenter',
  'onpointerleave',
  'onpointermove',
  'onpointerout',
  'onpointerover',
  'onpointerrawupdate',
  'onpointerup',
  'onprogress',
  'onpropertychange',
  'onratechange',
  'onreadystatechange',
  'onrepeat',
  'onreset',
  'onresize',
  'onresizeend',
  'onresizestart',
  'onresume',
  'onreverse',
  'onrowdelete',
  'onrowenter',
  'onrowexit',
  'onrowinserted',
  'onscroll',
  'onscrollend',
  'onsearch',
  'onseek',
  'onseeked',
  'onseeking',
  'onselect',
  'onselectionchange',
  'onselectstart',
  'onshow',
  'onstalled',
  'onstart',
  'onstop',
  'onstorage',
  'onsubmit',
  'onsuspend',
  'onsynchrestored',
  'ontimeerror',
  'ontimeupdate',
  'ontoggle',
  'ontrackchange',
  'ontransitioncancel',
  'ontransitionend',
  'ontransitionrun',
  'ontransitionstart',
  'onunload',
  'onurlflip',
  'onvolumechange',
  'onwaiting',
  'onwebkitanimationend',
  'onwebkitanimationiteration',
  'onwebkitanimationstart',
  'onwebkitfullscreenchange',
  'onwebkitfullscreenerror',
  'onwebkittransitionend',
  'onwheel',
];

/**
 * Returns an array of all event handlers. Some of the event handlers may be
 * supported only in some browsers.
 *
 * For every event type that the browser supports, SVG supports that as an event
 * attribute, following the same requirements as for HTML event attributes.
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events
 *
 * @return {!Array<string>}
 */
export function getUnsafeAttributeEventHandlers() {
  if (typeof window !== 'undefined') {
    const eventHandlers = [];
    for (const name in HTMLElement.prototype) {
      if (name.slice(0, 2) === 'on') {
        eventHandlers.push(name);
      }
    }
    return eventHandlers;
  } else {
    return unsafeAttributeEventHandlers;
  }
}
