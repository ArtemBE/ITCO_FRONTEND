function pluralize(n){
    if(n%100>=10 && n%100<=19) return 'ов'
    if(n%10==1) return ''
    if(n%10<=4 && n%10!=0) return 'а'
    return 'ов'
}
export default pluralize;
