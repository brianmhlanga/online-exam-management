import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import AutoComplete from 'primevue/autocomplete';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import FileUpload from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import InlineMessage from 'primevue/inlinemessage';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import Dropdown from 'primevue/dropdown';
import ConfirmPopup from 'primevue/confirmpopup';
import OrderList from 'primevue/orderlist';
import ToggleButton from 'primevue/togglebutton';
import MultiSelect from 'primevue/multiselect';
import Skeleton from 'primevue/skeleton';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import RadioButton from 'primevue/radiobutton';
import Steps from 'primevue/steps';
import Fieldset from 'primevue/fieldset';
import ScrollTop from 'primevue/scrolltop';
import ScrollPanel from 'primevue/scrollpanel';
import Editor from 'primevue/editor';
import Chips from 'primevue/chips';
import Dialog from 'primevue/dialog';
import SelectButton from 'primevue/selectbutton';
import InputSwitch from 'primevue/inputswitch';
import Listbox from 'primevue/listbox';
import InputNumber from 'primevue/inputnumber';
import Divider from 'primevue/divider';
import DataView from 'primevue/dataview';
import Panel from 'primevue/panel';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import SplitButton from 'primevue/splitbutton';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';
import ProgressBar from 'primevue/progressbar'; 
import Slider from 'primevue/slider';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import PanelMenu from 'primevue/panelmenu';
import Chart from 'primevue/chart';
import Password from 'primevue/password';
import Avatar from 'primevue/avatar';
import Quill from 'quill'
import AvatarGroup from 'primevue/avatargroup';
import Tag from 'primevue/tag';
import BlockUI from 'primevue/blockui';
import Breadcrumb from 'primevue/breadcrumb';
import ProgressSpinner from 'primevue/progressspinner';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import ColorPicker from 'primevue/colorpicker';





export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.use(ToastService);
    
    nuxtApp.vueApp.use(ConfirmationService);
    nuxtApp.vueApp.component('ProgressSpinner',ProgressSpinner)
    nuxtApp.vueApp.component('Chart',Chart)
    nuxtApp.vueApp.component('Slider',Slider);
    nuxtApp.vueApp.component('ColorPicker',ColorPicker)
    nuxtApp.vueApp.component('Splitter',Splitter);
    nuxtApp.vueApp.component('SplitterPanel',SplitterPanel);
    nuxtApp.vueApp.component('InlineMessage',InlineMessage);
    nuxtApp.vueApp.component('BlockUI', BlockUI);
    nuxtApp.vueApp.component('Avatar',Avatar);
    nuxtApp.vueApp.component('Tag', Tag);
    nuxtApp.vueApp.component('BreadCrumb',Breadcrumb)
    nuxtApp.vueApp.component('AvatarGroup',AvatarGroup);
    nuxtApp.vueApp.component('Password',Password);
    nuxtApp.vueApp.component('PanelMenu',PanelMenu);
    nuxtApp.vueApp.component('ConfirmDialog',ConfirmDialog)
    nuxtApp.vueApp.component('ProgressBar',ProgressBar);
    nuxtApp.vueApp.component('TriStateCheckbox',TriStateCheckbox);
    nuxtApp.vueApp.component('DataTable',DataTable);
    nuxtApp.vueApp.component('ConfirmPopup',ConfirmPopup)
    nuxtApp.vueApp.component('Column',Column);
    nuxtApp.vueApp.component('ColumnGroup',ColumnGroup);
    nuxtApp.vueApp.component('Row',Row);
    nuxtApp.vueApp.component('MazPhoneNumberInput',MazPhoneNumberInput)
    nuxtApp.vueApp.component('SelectButton',SelectButton);
    nuxtApp.vueApp.component('SplitButton',SplitButton);
    nuxtApp.vueApp.component('Accordion',Accordion);
    nuxtApp.vueApp.component('AccordionTab',AccordionTab)
    nuxtApp.vueApp.component('TabView', TabView);
    nuxtApp.vueApp.component('InputSwitch',InputSwitch);
    nuxtApp.vueApp.component('Panel',Panel);
    nuxtApp.vueApp.component('TabPanel',TabPanel);
    nuxtApp.vueApp.component('DataView',DataView);
    nuxtApp.vueApp.component('Steps', Steps);
    nuxtApp.vueApp.component('Editor', Editor);
    nuxtApp.vueApp.component('ScrollTop', ScrollTop)
    nuxtApp.vueApp.component('Dialog',Dialog);
    nuxtApp.vueApp.component('Chips', Chips);
    nuxtApp.vueApp.component('Chip',Chip);
    nuxtApp.vueApp.component('Divider',Divider);
    nuxtApp.vueApp.component('ScrollPanel', ScrollPanel);
    nuxtApp.vueApp.component('FieldSet',Fieldset);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('Card',Card);
    nuxtApp.vueApp.component('OrderList',OrderList);
    nuxtApp.vueApp.component('RadioButton',RadioButton)
    nuxtApp.vueApp.component('MultiSelect',MultiSelect);
    nuxtApp.vueApp.component('ToggleButton', ToggleButton)
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('InputNumber',InputNumber)
    nuxtApp.vueApp.component('TextArea',Textarea );
    nuxtApp.vueApp.component('AutoComplete', AutoComplete);
    nuxtApp.vueApp.component('DropDown', Dropdown);
    nuxtApp.vueApp.component('FileUpload', FileUpload);
    nuxtApp.vueApp.component('Calendar', Calendar);
    nuxtApp.vueApp.component('Skeleton', Skeleton);
    nuxtApp.vueApp.component('ListBox',Listbox)
});