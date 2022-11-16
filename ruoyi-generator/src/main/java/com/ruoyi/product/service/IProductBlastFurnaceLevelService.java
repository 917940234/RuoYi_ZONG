package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceLevel;

/**
 * 铁水包液位Service接口
 * 
 * @author zongyoucheng
 * @date 2022-11-24
 */
public interface IProductBlastFurnaceLevelService 
{
    /**
     * 查询铁水包液位
     * 
     * @param blastFurnaceLevelId 铁水包液位主键
     * @return 铁水包液位
     */
    public ProductBlastFurnaceLevel selectProductBlastFurnaceLevelByBlastFurnaceLevelId(Long blastFurnaceLevelId);

    /**
     * 查询铁水包液位列表
     * 
     * @param productBlastFurnaceLevel 铁水包液位
     * @return 铁水包液位集合
     */
    public List<ProductBlastFurnaceLevel> selectProductBlastFurnaceLevelList(ProductBlastFurnaceLevel productBlastFurnaceLevel);

    /**
     * 查询铁水包液位列表(大数据专用）
     *
     * @param productBlastFurnaceLevel 铁水包液位
     * @return 铁水包液位集合
     */
    public List<ProductBlastFurnaceLevel> selectProductBlastFurnaceLevelListNew(ProductBlastFurnaceLevel productBlastFurnaceLevel);

    /**
     * 新增铁水包液位
     * 
     * @param productBlastFurnaceLevel 铁水包液位
     * @return 结果
     */
    public int insertProductBlastFurnaceLevel(ProductBlastFurnaceLevel productBlastFurnaceLevel);

    /**
     * 修改铁水包液位
     * 
     * @param productBlastFurnaceLevel 铁水包液位
     * @return 结果
     */
    public int updateProductBlastFurnaceLevel(ProductBlastFurnaceLevel productBlastFurnaceLevel);

    /**
     * 批量删除铁水包液位
     * 
     * @param blastFurnaceLevelIds 需要删除的铁水包液位主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceLevelByBlastFurnaceLevelIds(String blastFurnaceLevelIds);

    /**
     * 删除铁水包液位信息
     * 
     * @param blastFurnaceLevelId 铁水包液位主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceLevelByBlastFurnaceLevelId(Long blastFurnaceLevelId);
}
