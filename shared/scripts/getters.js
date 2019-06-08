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
export function getPlayedBowlers(innings) {
    return innings.bowlers.filter(bowler => {
        return bowler.overs != '0';
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxVQUFVLGlCQUFpQixDQUFDLGNBQThCLEVBQUUsUUFBa0I7SUFDbkYsSUFBSSxZQUFZLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekQsT0FBTyxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksUUFBUSxJQUFJLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFO1FBQ3RELE9BQU8sWUFBWSxDQUFDO0tBQ3BCO0lBRUQsb0RBQW9EO0lBQ3BELElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzdDLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7S0FDN0I7SUFDRCxPQUFPLFlBQVksQ0FBQztBQUNyQixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLGNBQThCO0lBQzlELE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN2RSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBdUI7SUFDdkQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN0QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyJ9