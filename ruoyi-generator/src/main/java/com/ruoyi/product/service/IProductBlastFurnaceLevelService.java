package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceLevel;

/**
 * 高炉液位数据监控Service接口
 * 
 * @author zongyoucheng
 * @date 2022-09-26
 */
public interface IProductBlastFurnaceLevelService 
{
    /**
     * 查询高炉液位数据监控
     * 
     * @param blastFurnaceLevelId 高炉液位数据监控主键
     * @return 高炉液位数据监控
     */
    public ProductBlastFurnaceLevel selectProductBlastFurnaceLevelByBlastFurnaceLevelId(Long blastFurnaceLevelId);

    /**
     * 查询高炉液位数据监控列表
     * 
     * @param productBlastFurnaceLevel 高炉液位数据监控
     * @return 高炉液位数据监控集合
     */
    public List<ProductBlastFurnaceLevel> selectProductBlastFurnaceLevelList(ProductBlastFurnaceLevel productBlastFurnaceLevel);

    /**
     * 新增高炉液位数据监控
     * 
     * @param productBlastFurnaceLevel 高炉液位数据监控
     * @return 结果
     */
    public int insertProductBlastFurnaceLevel(ProductBlastFurnaceLevel productBlastFurnaceLevel);

    /**
     * 修改高炉液位数据监控
     * 
     * @param productBlastFurnaceLevel 高炉液位数据监控
     * @return 结果
     */
    public int updateProductBlastFurnaceLevel(ProductBlastFurnaceLevel productBlastFurnaceLevel);

    /**
     * 批量删除高炉液位数据监控
     * 
     * @param blastFurnaceLevelIds 需要删除的高炉液位数据监控主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceLevelByBlastFurnaceLevelIds(String blastFurnaceLevelIds);

    /**
     * 删除高炉液位数据监控信息
     * 
     * @param blastFurnaceLevelId 高炉液位数据监控主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceLevelByBlastFurnaceLevelId(Long blastFurnaceLevelId);
}
