function totalExperience() {
    const date2 = new Date('2015-07-13');
    const monthDiff = new Date().getMonth() - date2.getMonth();
    const yearDiff = new Date().getYear() - date2.getYear();

    return yearDiff + '.' + monthDiff;
}
