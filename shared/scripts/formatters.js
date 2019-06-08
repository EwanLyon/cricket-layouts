export function formatOvers(currentInnings, currentOver) {
    let totalOvers = currentInnings.overs.length;
    let ballsInOver = currentOver.over.length;
    if (currentOver.ballsLeft == 0) {
        totalOvers++;
        ballsInOver = 0;
    }
    return `${totalOvers}.${ballsInOver}`;
}
export function formatName(batterName) {
    let splitName = batterName.split(" ");
    return splitName[splitName.length - 1].toUpperCase();
}
export function formatScore(currentInnings) {
    return currentInnings.wickets + "-" + currentInnings.runs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm1hdHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxVQUFVLFdBQVcsQ0FBQyxjQUE4QixFQUFFLFdBQWlCO0lBQzVFLElBQUksVUFBVSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdDLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFDLElBQUksV0FBVyxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDL0IsVUFBVSxFQUFFLENBQUM7UUFDYixXQUFXLEdBQUcsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxHQUFHLFVBQVUsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxVQUFrQjtJQUM1QyxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdEQsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsY0FBOEI7SUFDekQsT0FBTyxjQUFjLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFBO0FBQzFELENBQUMifQ==