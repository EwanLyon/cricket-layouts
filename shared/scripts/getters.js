export function getCurrentBatsmen(currentInnings, oldValue) {
    let batsmenArray = currentInnings.batsmen.filter(batter => {
        return batter.batting == "BATTING";
    });
    if (oldValue == undefined || oldValue[0] == undefined) {
        return batsmenArray;
    }
    // Don't switch the batsmen places when one goes out
    if (oldValue[1].name == batsmenArray[0].name) {
        let tempBatter = batsmenArray[0];
        batsmenArray[0] = batsmenArray[1];
        batsmenArray[1] = tempBatter;
    }
    return batsmenArray;
}
export function getCurrentBowler(currentInnings) {
    return currentInnings.bowlers[currentInnings.bowlers.findIndex(bowler => {
        return bowler.bowling;
    })];
}
export function getPlayedBowlers(currentInnings) {
    return currentInnings.bowlers.filter(bowler => {
        return bowler.overs != '0';
    });
}
export function getCurrentFacing(currentInnings) {
    const batsmen = getCurrentBatsmen(currentInnings, undefined);
    if (batsmen[0].facing) {
        return batsmen[0];
    }
    return batsmen[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxVQUFVLGlCQUFpQixDQUFDLGNBQThCLEVBQUUsUUFBOEI7SUFDL0YsSUFBSSxZQUFZLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekQsT0FBTyxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksUUFBUSxJQUFJLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFO1FBQ3RELE9BQU8sWUFBWSxDQUFDO0tBQ3BCO0lBRUQsb0RBQW9EO0lBQ3BELElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzdDLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7S0FDN0I7SUFDRCxPQUFPLFlBQVksQ0FBQztBQUNyQixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLGNBQThCO0lBQzlELE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN2RSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsY0FBOEI7SUFDOUQsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxjQUE4QjtJQUM5RCxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0QsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQyJ9