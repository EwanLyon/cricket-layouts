export function formatOvers(currentInnings, currentOver) {
    let totalOvers = currentInnings.overs.length;
    let ballsInOver = currentOver.over.length;
    return `${totalOvers}.${ballsInOver}`;
}
export function formatName(batterName) {
    let splitName = batterName.split(" ");
    return splitName[splitName.length - 1].toUpperCase();
}
export function formatScore(currentInnings) {
    return currentInnings.wickets + "-" + currentInnings.runs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm1hdHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxVQUFVLFdBQVcsQ0FBQyxjQUE4QixFQUFFLFdBQWlCO0lBQzVFLElBQUksVUFBVSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdDLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFDLE9BQU8sR0FBRyxVQUFVLElBQUksV0FBVyxFQUFFLENBQUM7QUFDdkMsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsVUFBa0I7SUFDNUMsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RELENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLGNBQThCO0lBQ3pELE9BQU8sY0FBYyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQTtBQUMxRCxDQUFDIn0=